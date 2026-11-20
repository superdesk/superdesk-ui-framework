import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {TextArea} from './TextArea';

type ITextAreaProps = React.ComponentProps<typeof TextArea>;

// Holds the value so the controlled component can be typed into.
function StatefulTextArea(props: ITextAreaProps) {
    const [value, setValue] = React.useState(props.value ?? '');

    return (
        <TextArea
            {...props}
            value={value}
            onChange={(newValue) => {
                setValue(newValue);
                props.onChange(newValue);
            }}
        />
    );
}

const noop = () => undefined;

const meta = {
    title: 'Form Components/TextArea',
    component: TextArea,
    parameters: {
        docs: {
            description: {
                component:
                    'Multi-line text input with the same label, hint, error and character counter as `Input`. Use `autoHeight` to grow the field with its content, optionally capped by `maxRows`.',
            },
        },
    },
    tags: ['autodocs'],
    render: (args) => <StatefulTextArea {...args} />,
    argTypes: {
        value: {control: 'text', description: 'Current value'},
        onChange: {action: 'changed', description: 'Called with the new string value'},
        label: {control: 'text'},
        info: {control: 'text', description: 'Hint shown under the field'},
        error: {control: 'text', description: 'Error message; marks the field as invalid'},
        placeholder: {control: 'text'},
        maxLength: {control: 'number', description: 'Shows a character counter and stops input at this length'},
        rows: {
            control: 'number',
            description: 'Number of visible text lines; the minimum height with autoHeight',
            table: {defaultValue: {summary: '3'}},
        },
        autoHeight: {control: 'boolean', description: 'Grow with the content instead of scrolling'},
        maxRows: {control: 'number', description: 'With autoHeight, stop growing at this many lines'},
        required: {control: 'boolean'},
        disabled: {control: 'boolean'},
        readonly: {control: 'boolean'},
        preview: {control: 'boolean'},
        inlineLabel: {control: 'boolean'},
        labelHidden: {control: 'boolean'},
        fullWidth: {control: 'boolean', table: {defaultValue: {summary: 'true'}}},
        boxedStyle: {control: 'boolean'},
        boxedLable: {control: 'boolean'},
    },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
    args: {
        label: 'Extra instructions',
        info: 'Added to the prompt sent to the model.',
        placeholder: 'Write in British English.',
        value: '',
        onChange: noop,
    },
};

export const AutoHeight: Story = {
    args: {
        label: 'Grows with content',
        info: 'Starts at 2 rows and stops growing at 6, then scrolls.',
        rows: 2,
        autoHeight: true,
        maxRows: 6,
        value: 'Line one\nLine two\nLine three',
        onChange: noop,
    },
};

export const WithCharacterCounter: Story = {
    args: {
        label: 'Short description',
        maxLength: 140,
        value: '',
        onChange: noop,
    },
};

export const States: Story = {
    args: {
        value: '',
        onChange: noop,
    },
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
            <StatefulTextArea label="Required" required={true} onChange={noop} />
            <StatefulTextArea label="Invalid" error="This field is required" required={true} onChange={noop} />
            <StatefulTextArea label="Disabled" disabled={true} value="Cannot be changed" onChange={noop} />
            <StatefulTextArea label="Read only" readonly={true} value="Can be selected and copied" onChange={noop} />
            <StatefulTextArea label="Inline label" inlineLabel={true} onChange={noop} />
            <StatefulTextArea label="Boxed" boxedStyle={true} boxedLable={true} onChange={noop} />
            <TextArea label="Preview" preview={true} value={'First line\nSecond line'} onChange={noop} />
        </div>
    ),
    parameters: {
        controls: {disable: true},
    },
};
