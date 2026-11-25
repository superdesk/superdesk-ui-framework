import {describe, it} from 'mocha';
import * as assert from 'assert';
import {mount, ReactWrapper} from 'enzyme';
import * as React from 'react';
import {Alert} from './Alert';
import {Dropdown} from './Dropdown';
import {Switch} from './Switch';
import {BoxedList, BoxedListItem} from './Lists/BoxedList';

const noop = () => undefined;

function getRootAttributes(wrapper: ReactWrapper) {
    const root = wrapper.getDOMNode();

    return [root.getAttribute('data-test-id'), root.getAttribute('data-test-value')];
}

describe('data-test-id and data-test-value', () => {
    it('are set on the root element of Alert', () => {
        const wrapper = mount(
            <Alert data-test-id="warning" data-test-value="no-default-model">
                Text
            </Alert>,
        );

        assert.deepStrictEqual(getRootAttributes(wrapper), ['warning', 'no-default-model']);
    });

    it('are set on the root element of Dropdown', () => {
        const wrapper = mount(
            <Dropdown items={[]} data-test-id="create" data-test-value="suggestion">
                <button>Create</button>
            </Dropdown>,
        );

        assert.deepStrictEqual(getRootAttributes(wrapper), ['create', 'suggestion']);
    });

    it('are set on the root element of Switch, with a visible or a hidden label', () => {
        const visible = mount(
            <Switch label={{content: 'Active'}} value onChange={noop} data-test-id="active" data-test-value="on" />,
        );
        const hidden = mount(
            <Switch
                label={{content: 'Active', hidden: true}}
                value
                onChange={noop}
                data-test-id="active"
                data-test-value="on"
            />,
        );

        assert.deepStrictEqual(getRootAttributes(visible), ['active', 'on']);
        // With a hidden label the wrapper sits inside a tooltip, so it is not the root
        const wrapper = hidden.find('.sd-switch__wrapper').getDOMNode();

        assert.deepStrictEqual(
            [wrapper.getAttribute('data-test-id'), wrapper.getAttribute('data-test-value')],
            ['active', 'on'],
        );
    });

    it('are set on the root elements of BoxedList and BoxedListItem', () => {
        const wrapper = mount(
            <BoxedList data-test-id="list">
                <BoxedListItem data-test-id="item" data-test-value="Headlines">
                    Headlines
                </BoxedListItem>
            </BoxedList>,
        );

        assert.deepStrictEqual(getRootAttributes(wrapper), ['list', null]);
        assert.strictEqual(wrapper.find('li').getDOMNode().getAttribute('data-test-value'), 'Headlines');
    });
});
