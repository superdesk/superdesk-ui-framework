import {describe, it} from 'mocha';
import * as assert from 'assert';
import {mount, ReactWrapper} from 'enzyme';
import * as React from 'react';
import {Tabs, TabLabel} from './TabCustom';

function getSelected(wrapper: ReactWrapper): Array<boolean> {
    return wrapper.find('button[role="tab"]').map((tab) => tab.prop('aria-selected') === 'true');
}

function renderTabs(props: Partial<React.ComponentProps<typeof Tabs>> = {}): ReactWrapper {
    return mount(
        <Tabs onClick={() => undefined} {...props}>
            <TabLabel label="Content" indexValue={0} />
            <TabLabel label="Metadata" indexValue={1} />
        </Tabs>,
    );
}

describe('Tabs', () => {
    it('selects the clicked tab when uncontrolled', () => {
        const clicked: Array<number> = [];
        const wrapper = renderTabs({initiallySelectedIndex: 1, onClick: (index) => clicked.push(index)});

        assert.deepStrictEqual(getSelected(wrapper), [false, true]);

        wrapper.find('button[role="tab"]').at(0).simulate('click');

        assert.deepStrictEqual(getSelected(wrapper), [true, false]);
        assert.deepStrictEqual(clicked, [0]);
    });

    it('follows `selectedIndex` when controlled, also when it changes after mount', () => {
        const wrapper = renderTabs({selectedIndex: 0});

        assert.deepStrictEqual(getSelected(wrapper), [true, false]);

        wrapper.setProps({selectedIndex: 1});

        assert.deepStrictEqual(getSelected(wrapper), [false, true]);
    });

    it('reports a click without selecting the tab when controlled', () => {
        const clicked: Array<number> = [];
        const wrapper = renderTabs({selectedIndex: 0, onClick: (index) => clicked.push(index)});

        wrapper.find('button[role="tab"]').at(1).simulate('click');

        assert.deepStrictEqual(clicked, [1]);
        assert.deepStrictEqual(getSelected(wrapper), [true, false]);
    });

    it('adds the segmented modifier for the segmented style', () => {
        assert.ok(renderTabs({style: 'segmented'}).find('.sd-nav-tabs').hasClass('sd-nav-tabs--segmented'));
        assert.ok(!renderTabs().find('.sd-nav-tabs').hasClass('sd-nav-tabs--segmented'));
    });
});
