import {describe, it} from 'mocha';
import * as assert from 'assert';
import {mount} from 'enzyme';
import * as React from 'react';
import {getPagination, WithPagination} from './WithPagination';
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
                return resolve({items: range(1, 500).map((x) => ({title: `title ${x}`})), itemCount: 500});
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

describe('getPagination', () => {
    it('returns empty array when we have 0 pages', () => {
        assert.strictEqual(getPagination(1, 0).length, 0);
    });

    it('returns empty array when we try to access page <= 0', () => {
        assert.strictEqual(getPagination(-10, 100).length, 0);
    });

    it('returns dots when on page 1 having 5 total pages', () => {
        assert.strictEqual(getPagination(1, 5).filter((x) => x === 'dots').length, 1);
    });

    it('returns dots when on the last page having 5 total pages', () => {
        assert.strictEqual(getPagination(5, 5).filter((x) => x === 'dots').length, 1);
    });

    it('returns dots twice when on the middle page', () => {
        assert.strictEqual(getPagination(5, 10).filter((x) => x === 'dots').length, 2);
    });

    it('returns page 1 and last page when on the middle page', () => {
        const res = getPagination(5, 10);
        const includesFirstAndLast = res[0] === 1 && res[res.length - 1] === 10;
        assert.strictEqual(includesFirstAndLast, true);
    });

    it('contains no pages out of reach', () => {
        const res = getPagination(101, 100);
        assert.strictEqual(res.length, 0);
    });
});

describe('with-pagination', () => {
    it('contains page-button-1 button when first rendered', (done) => {
        const wrapper = mount(<Paginated />);

        setTimeout(() => {
            assert.strictEqual(
                wrapper.update().find('[data-test-id="page-button-1"]').length,
                2,
            );
            done();
        }, TIMEOUT + 100);
    });

    it('contains page-button-4 after clicking forward', (done) => {
        const wrapper = mount(<Paginated />);

        setTimeout(() => {
            wrapper.update();
            wrapper.find('[data-test-id="btn-3"]').at(0).simulate('click');

            assert.strictEqual(
                wrapper.find('[data-test-id="page-button-4"]').length,
                2,
            );
            done();
        }, TIMEOUT + 100);
    });

    it('previous-next buttons works', (done) => {
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
                wrapper.find('[data-test-id="more-pages"]').length,
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
