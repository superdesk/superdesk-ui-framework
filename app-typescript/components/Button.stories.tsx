import type {Meta, StoryObj} from '@storybook/react';
import {Button} from './Button';

// No-op function for story examples
const noop = () => undefined;

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'A versatile button component supporting multiple variants, sizes, and states. **Primary, Secondary, and Tertiary** types are recommended for Superdesk applications.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        text: {
            control: 'text',
            description: 'Button text label (becomes aria-label for icon-only buttons)',
        },
        onClick: {
            action: 'clicked',
            description: 'Click handler function',
        },
        type: {
            control: 'select',
            options: [
                'primary',
                'secondary',
                'tertiary',
                'default',
                'success',
                'warning',
                'alert',
                'highlight',
                'sd-green',
            ],
            description: 'Button variant type. **Recommended:** primary, secondary, tertiary',
            table: {
                defaultValue: {summary: 'default'},
            },
        },
        size: {
            control: 'select',
            options: ['small', 'normal', 'large'],
            description: 'Button size',
            table: {
                defaultValue: {summary: 'normal'},
            },
        },
        style: {
            control: 'select',
            options: ['filled', 'hollow', 'text-only'],
            description: '⚠️ **DEPRECATED** - Will be removed in future versions',
            table: {
                defaultValue: {summary: 'filled'},
            },
        },
        theme: {
            control: 'select',
            options: ['light', 'dark'],
            description: 'Theme variant for different backgrounds',
            table: {
                defaultValue: {summary: 'light'},
            },
        },
        shape: {
            control: 'select',
            options: ['square', 'round'],
            description: 'Button shape (round only works with iconOnly)',
            table: {
                defaultValue: {summary: 'square'},
            },
        },
        disabled: {
            control: 'boolean',
            description: 'Disable button interactions',
            table: {
                defaultValue: {summary: 'false'},
            },
        },
        isLoading: {
            control: 'boolean',
            description: 'Show loading spinner',
            table: {
                defaultValue: {summary: 'false'},
            },
        },
        expand: {
            control: 'boolean',
            description: 'Expand to full width of container',
            table: {
                defaultValue: {summary: 'false'},
            },
        },
        iconOnly: {
            control: 'boolean',
            description: 'Show only icon (text becomes aria-label)',
            table: {
                defaultValue: {summary: 'false'},
            },
        },
        noMargin: {
            control: 'boolean',
            description: 'Remove default margins',
            table: {
                defaultValue: {summary: 'false'},
            },
        },
        icon: {
            control: 'text',
            description: 'Icon name from icon font',
        },
        tooltip: {
            control: 'text',
            description: 'Tooltip text shown on hover',
        },
        ariaLabel: {
            control: 'text',
            description: 'Custom ARIA label (auto-generated for iconOnly)',
        },
        textAlign: {
            control: 'select',
            options: ['start', 'center', 'end'],
            description: 'Text alignment within button',
            table: {
                defaultValue: {summary: 'center'},
            },
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// 1. PLAYGROUND - Interactive exploration
export const Playground: Story = {
    args: {
        text: 'Button Text',
        type: 'primary',
        onClick: noop,
    },
};

// 2. Recommended Types
export const RecommendedTypes: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
            <Button text="Primary" type="primary" onClick={noop} />
            <Button text="Secondary" type="secondary" onClick={noop} />
            <Button text="Tertiary" type="tertiary" onClick={noop} />
        </div>
    ),
    parameters: {
        controls: {disable: true},
        docs: {
            description: {
                story: 'These are the recommended button types for Superdesk applications.',
            },
        },
    },
};

// 3. Sizes
export const Sizes: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
            <div style={{display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap'}}>
                <Button text="Small" type="primary" size="small" onClick={noop} />
                <Button text="Normal" type="primary" onClick={noop} />
                <Button text="Large" type="primary" size="large" onClick={noop} />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
                <Button text="Large expanded button" expand={true} size="large" type="primary" onClick={noop} />
                <Button text="Normal expanded button" expand={true} type="primary" onClick={noop} />
                <Button text="Small expanded button" expand={true} size="small" type="primary" onClick={noop} />
            </div>
        </div>
    ),
    parameters: {
        controls: {disable: true},
        docs: {
            description: {
                story: 'Buttons are available in three sizes. Use the expand prop to make buttons take full width.',
            },
        },
    },
};

// 4. States
export const States: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
            <Button text="Normal" type="primary" onClick={noop} />
            <Button text="Disabled" type="primary" disabled onClick={noop} />
            <Button text="Loading" type="primary" isLoading onClick={noop} />
        </div>
    ),
    parameters: {
        controls: {disable: true},
        docs: {
            description: {
                story: 'Common button states including disabled and loading.',
            },
        },
    },
};

// 5. With Icons
export const WithIcons: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
            <div>
                <div style={{marginBottom: '8px', fontSize: '14px', fontWeight: 600}}>Default size</div>
                <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
                    <Button text="Primary" type="primary" icon="plus-sign" onClick={noop} />
                    <Button text="Secondary" type="secondary" icon="info-sign" onClick={noop} />
                    <Button text="Tertiary" type="tertiary" icon="info-sign" onClick={noop} />
                </div>
            </div>
            <div>
                <div style={{marginBottom: '8px', fontSize: '14px', fontWeight: 600}}>Large and small</div>
                <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <Button text="Primary large" type="primary" icon="plus-sign" size="large" onClick={noop} />
                    <Button text="Secondary large" type="secondary" icon="info-sign" size="large" onClick={noop} />
                    <Button text="Primary small" type="primary" icon="plus-sign" size="small" onClick={noop} />
                    <Button text="Tertiary small" type="tertiary" icon="info-sign" size="small" onClick={noop} />
                </div>
            </div>
        </div>
    ),
    parameters: {
        controls: {disable: true},
        docs: {
            description: {
                story: 'Buttons can include icons from the icon font in different sizes.',
            },
        },
    },
};

// 6. Icon Only
export const IconOnly: Story = {
    render: () => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
            <div>
                <div style={{marginBottom: '8px', fontSize: '14px', fontWeight: 600}}>
                    Square (large, default, small)
                </div>
                <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <Button type="primary" icon="plus-sign" text="plus-sign" size="large" iconOnly onClick={noop} />
                    <Button
                        type="secondary"
                        icon="exclamation-sign"
                        text="exclamation-sign"
                        size="large"
                        iconOnly
                        onClick={noop}
                    />
                    <Button type="tertiary" icon="bell" text="bell" size="large" iconOnly onClick={noop} />
                    <Button type="primary" icon="plus-sign" text="plus-sign" iconOnly onClick={noop} />
                    <Button type="secondary" icon="info-sign" text="info-sign" iconOnly onClick={noop} />
                    <Button type="tertiary" icon="ok" text="ok" iconOnly onClick={noop} />
                    <Button type="primary" icon="plus-sign" text="plus-sign" size="small" iconOnly onClick={noop} />
                    <Button type="secondary" icon="calendar" text="calendar" size="small" iconOnly onClick={noop} />
                    <Button type="tertiary" icon="refresh" text="refresh" size="small" iconOnly onClick={noop} />
                </div>
            </div>
            <div>
                <div style={{marginBottom: '8px', fontSize: '14px', fontWeight: 600}}>
                    Round (large, default, small)
                </div>
                <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <Button
                        type="primary"
                        icon="plus-large"
                        text="plus-large"
                        size="large"
                        shape="round"
                        iconOnly
                        onClick={noop}
                    />
                    <Button
                        type="secondary"
                        icon="exclamation-sign"
                        text="exclamation-sign"
                        size="large"
                        shape="round"
                        iconOnly
                        onClick={noop}
                    />
                    <Button
                        type="tertiary"
                        icon="chevron-up-thin"
                        text="Pull up"
                        size="large"
                        shape="round"
                        iconOnly
                        onClick={noop}
                    />
                    <Button type="primary" icon="plus-large" text="plus-large" shape="round" iconOnly onClick={noop} />
                    <Button type="secondary" icon="info-sign" text="info-sign" shape="round" iconOnly onClick={noop} />
                    <Button type="tertiary" icon="ok" text="ok" shape="round" iconOnly onClick={noop} />
                    <Button
                        type="primary"
                        icon="plus-large"
                        text="Add New"
                        size="small"
                        shape="round"
                        iconOnly
                        onClick={noop}
                    />
                    <Button
                        type="secondary"
                        icon="star"
                        text="star"
                        size="small"
                        shape="round"
                        iconOnly
                        onClick={noop}
                    />
                    <Button
                        type="tertiary"
                        icon="close-small"
                        text="close-small"
                        size="small"
                        shape="round"
                        iconOnly
                        onClick={noop}
                    />
                </div>
            </div>
        </div>
    ),
    parameters: {
        controls: {disable: true},
        docs: {
            description: {
                story: 'Icon-only buttons hide text visually but use it for aria-label. Available in both square and round shapes.',
            },
        },
    },
};
