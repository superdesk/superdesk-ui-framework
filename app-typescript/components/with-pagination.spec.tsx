import {describe, it} from 'mocha';
import * as assert from 'assert';
import {mount} from 'enzyme';
import * as React from 'react';
import {WithPagination} from './WithPagination';
import {range} from 'lodash';

interface IPost {
    title: string;
}

// Simulate fetching delay
const TIMEOUT = 1000;

export class Paginated extends React.PureComponent {
    getItems(): Promise<{items: Array<IPost>, itemCount: number}> {
        return new Promise((resolve) => {
            setTimeout(() => {
                return resolve({items: range(1, 500).map((x) => ({title: `title ${x}`})), itemCount: 100});
            }, TIMEOUT);
        });
    }

    render() {
        return (
            <WithPagination
                getItems={() => this.getItems()}
            >
                {
                    (items) => <div>{JSON.stringify(items)}</div>
                }
            </WithPagination>
        );
    }
}

describe.only('with-pagination', () => {
    it('returns button1 when rendered', (done) => {
        const wrapper = mount(<Paginated />);

        setTimeout(() => {
            assert.strictEqual(
                wrapper.update().find('[data-test-id="button1"]').length,
                2,
            );
            done();
        }, TIMEOUT + 100);
    });

    it('returns button4 after clicking forward', (done) => {
        const wrapper = mount(<Paginated />);

        setTimeout(() => {
            wrapper.update();
            wrapper.find('[data-test-id="btn-3"]').at(0).simulate('click');

            assert.strictEqual(
                wrapper.find('[data-test-id="button4"]').length,
                2,
            );
            done();
        }, TIMEOUT + 100);
    });

    it('returns button4 when at 1 page before the last page', (done) => {
        const wrapper = mount(<Paginated />);

        setTimeout(() => {
            wrapper.update();
            wrapper.find('[data-test-id="btn-4"]').at(0).simulate('click');
            wrapper.find('[data-test-id="btn-2"]').at(0).simulate('click');

            assert.strictEqual(
                wrapper.find('[data-test-id="button4"]').length,
                2,
            );
            done();
        }, TIMEOUT + 100);
    });

    it('returns span when at last page', (done) => {
        const wrapper = mount(<Paginated />);

        setTimeout(() => {
            wrapper.update();
            wrapper.find('[data-test-id="btn-4"]').at(0).simulate('click');

            assert.strictEqual(
                wrapper.find('[data-test-id="span"]').length,
                2,
            );
            done();
        }, TIMEOUT + 100);
    });

    it.only('scrolls to the top of the pagination container', (done) => {
        const wrapper = mount(
            <div style={{height: 1200, overflowY: 'auto'}}>
                <div style={{height: 400}} />
                <Paginated />
            </div>,
        );

        setTimeout(() => {
            wrapper.update();
            wrapper.find('[data-test-id="btn-4"]').at(1).simulate('click');

            assert.strictEqual(
                wrapper.getDOMNode().scrollTop,
                0,
            );
            done();
        }, TIMEOUT + 100);
    });
});
