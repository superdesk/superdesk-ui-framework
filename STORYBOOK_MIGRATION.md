# Storybook Migration Guide

This guide provides instructions for migrating React components to Storybook 10 in the Superdesk UI Framework.

## Overview

Storybook is now integrated into this project to provide interactive component documentation and development environment. This guide explains how to create stories for components following the established patterns.

## Quick Start

### Running Storybook

```bash
# Development mode (hot reload)
npm run storybook

# Build static version
npm run build-storybook
```

Storybook will run at http://localhost:6006/

## Creating Stories for Components

### File Structure

Place story files alongside component files in `app-typescript/components/`:

```
app-typescript/components/
  Button.tsx              # Component implementation
  Button.stories.tsx      # Component stories
```

### Basic Story Template

Here's a template for creating component stories using CSF 3.0 (Component Story Format):

```typescript
import type {Meta, StoryObj} from '@storybook/react';
import {YourComponent} from './YourComponent';

const meta = {
    title: 'Components/YourComponent',
    component: YourComponent,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A brief description of your component and its purpose.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        propName: {
            control: 'text',
            description: 'Description of what this prop does',
            table: {
                defaultValue: {summary: 'default'},
            },
        },
        // Add argTypes for all props
    },
} satisfies Meta<typeof YourComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// 1. Playground - Interactive exploration
export const Playground: Story = {
    args: {
        // Default prop values
    },
};

// 2. Additional example stories
export const Example: Story = {
    args: {
        // Specific configuration
    },
};
```

### Story Patterns

#### 1. Playground Story (Required)

Every component should have a Playground story for interactive exploration:

```typescript
export const Playground: Story = {
    args: {
        text: 'Button Text',
        type: 'primary',
        onClick: () => console.info('Button clicked'),
    },
};
```

#### 2. Variant Stories

Show different variants of the component:

```typescript
export const Variants: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
            <YourComponent variant="primary" text="Primary" />
            <YourComponent variant="secondary" text="Secondary" />
            <YourComponent variant="tertiary" text="Tertiary" />
        </div>
    ),
    parameters: {
        controls: {disable: true},
        docs: {
            description: {
                story: 'Available variants of the component.',
            },
        },
    },
};
```

#### 3. State Stories

Demonstrate different states (disabled, loading, error, etc.):

```typescript
export const States: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
            <YourComponent state="normal" />
            <YourComponent state="disabled" disabled />
            <YourComponent state="loading" isLoading />
        </div>
    ),
    parameters: {
        controls: {disable: true},
    },
};
```

## ArgTypes Configuration

### Control Types

Storybook provides various control types for props:

```typescript
argTypes: {
    // Text input
    text: {
        control: 'text',
        description: 'Text content',
    },

    // Boolean toggle
    disabled: {
        control: 'boolean',
        description: 'Disable interactions',
    },

    // Select dropdown
    size: {
        control: 'select',
        options: ['small', 'medium', 'large'],
        description: 'Component size',
    },

    // Number input
    count: {
        control: 'number',
        description: 'Item count',
    },

    // Color picker
    color: {
        control: 'color',
        description: 'Background color',
    },

    // Action handler
    onClick: {
        action: 'clicked',
        description: 'Click handler function',
    },
}
```

### Default Values

Specify default values in the table:

```typescript
propName: {
    control: 'select',
    options: ['option1', 'option2'],
    table: {
        defaultValue: {summary: 'option1'},
    },
}
```

## Best Practices

### 1. Component Description

Always provide a clear component description:

```typescript
parameters: {
    docs: {
        description: {
            component: 'Clear, concise description of what the component does and when to use it.',
        },
    },
}
```

### 2. Story Descriptions

Add context to individual stories:

```typescript
export const Example: Story = {
    args: {...},
    parameters: {
        docs: {
            description: {
                story: 'Explain what this specific story demonstrates.',
            },
        },
    },
};
```

### 3. Prop Documentation

Document all props with clear descriptions:

```typescript
argTypes: {
    propName: {
        control: 'text',
        description: 'Clear description of what this prop does and its expected values',
    },
}
```

### 4. Accessibility

Use the built-in Accessibility addon to verify:

- Color contrast ratios meet WCAG AA standards
- ARIA attributes are correct
- Keyboard navigation works properly
- Screen reader compatibility

### 5. Responsive Design

Test components at different viewport sizes using the Viewport addon.

## Example: Button Component

See `app-typescript/components/Button.stories.tsx` for a complete reference implementation featuring:

- Comprehensive argTypes for all 15+ props
- Interactive Playground story
- Variant demonstrations (Primary, Secondary, Tertiary)
- Size variations (Small, Normal, Large)
- State examples (Normal, Disabled, Loading)
- Icon usage patterns

## Configuration

### Storybook Configuration Files

- `.storybook/main.ts` - Main configuration, addons, webpack customization
- `.storybook/preview.ts` - Global decorators, parameters, and styles

### Key Features

- **Autodocs**: Automatic documentation generation from TypeScript types
- **SCSS Support**: Full support for existing styles via webpack config
- **TypeScript**: Full type safety with react-docgen-typescript
- **Accessibility**: Built-in a11y testing
- **Responsive**: Viewport testing for different screen sizes

## Common Issues

### Styles Not Loading

Ensure SCSS files are imported in `.storybook/preview.ts`:

```typescript
import '../app/styles/app.scss';
```

### TypeScript Errors

If TypeScript errors occur, check:

1. Component exports are correctly named
2. Props interface is exported
3. Types are properly defined

### Stories Not Appearing

Verify:

1. File matches the pattern in `.storybook/main.ts`: `app-typescript/**/*.stories.@(ts|tsx)`
2. File exports a default meta object
3. File exports at least one story
4. Storybook dev server has been restarted

## Migration Checklist

When migrating a component to Storybook:

- [ ] Create `.stories.tsx` file alongside component
- [ ] Import component and Storybook types
- [ ] Define meta object with title, component, and parameters
- [ ] Add comprehensive argTypes for all props
- [ ] Enable autodocs with `tags: ['autodocs']`
- [ ] Create Playground story with interactive controls
- [ ] Add variant/example stories as needed
- [ ] Test all stories render correctly
- [ ] Verify accessibility with a11y addon
- [ ] Test responsive behavior
- [ ] Document any special usage notes

## Resources

- [Storybook Documentation](https://storybook.js.org/docs)
- [Component Story Format 3.0](https://storybook.js.org/docs/api/csf)
- [TypeScript Configuration](https://storybook.js.org/docs/configure/typescript)
- [Accessibility Testing](https://storybook.js.org/docs/writing-tests/accessibility-testing)
