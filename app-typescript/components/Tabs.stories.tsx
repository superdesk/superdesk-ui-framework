import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {Tabs, TabLabel, TabContent, TabPanel} from './TabCustom';
import {Button} from './Button';

type ITabsProps = React.ComponentProps<typeof Tabs>;

const LABELS = ['Content', 'Metadata', 'Duplicates'];

function renderLabels() {
    return LABELS.map((label, index) => <TabLabel key={label} label={label} indexValue={index} />);
}

// Holds the selected tab, as an app does when it controls the selection
function ControlledTabs(props: ITabsProps) {
    const [selected, setSelected] = React.useState(0);

    return (
        <div>
            <Tabs
                {...props}
                selectedIndex={selected}
                onClick={(index) => {
                    setSelected(index);
                    props.onClick(index);
                }}
            >
                {renderLabels()}
            </Tabs>
            <TabContent activePanel={selected}>
                {LABELS.map((label, index) => (
                    <TabPanel key={label} indexValue={index}>
                        {label} here.
                    </TabPanel>
                ))}
            </TabContent>
            <Button
                text="Select the next tab from code"
                size="small"
                onClick={() => setSelected((selected + 1) % LABELS.length)}
            />
        </div>
    );
}

const noop = () => undefined;

const meta = {
    title: 'Navigation/Tabs',
    component: Tabs,
    parameters: {
        docs: {
            description: {
                component:
                    'A tab list, used with `TabContent` when the panels live elsewhere. Pass `selectedIndex` to control the selected tab, for example to switch tabs from code; without it, `Tabs` keeps the selection itself and `initiallySelectedIndex` only sets the first one.',
            },
        },
    },
    tags: ['autodocs'],
    render: (args) => <Tabs {...args}>{renderLabels()}</Tabs>,
    argTypes: {
        onClick: {action: 'clicked', description: 'Called with the index of the clicked tab'},
        selectedIndex: {
            control: 'number',
            description:
                'Index of the selected tab. When set, the selection follows it and `onClick` only reports clicks',
        },
        initiallySelectedIndex: {
            control: 'number',
            description: 'Index of the tab selected on mount, when `selectedIndex` is not set',
            table: {defaultValue: {summary: '0'}},
        },
        style: {
            control: 'inline-radio',
            options: ['default', 'segmented'],
            description:
                'Segmented shows the tabs as a segmented control, for switching between views of the same content',
            table: {defaultValue: {summary: 'default'}},
        },
        size: {
            control: 'inline-radio',
            options: ['small', 'normal', 'large'],
            table: {defaultValue: {summary: 'normal'}},
        },
        theme: {control: 'inline-radio', options: ['light', 'dark'], table: {defaultValue: {summary: 'light'}}},
        ariaLabel: {control: 'text'},
        children: {control: false},
    },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
    args: {
        children: [],
        onClick: noop,
    },
};

export const Segmented: Story = {
    args: {
        children: [],
        style: 'segmented',
        onClick: noop,
    },
};

export const Controlled: Story = {
    args: {
        children: [],
        onClick: noop,
    },
    render: (args) => <ControlledTabs {...args} />,
};
