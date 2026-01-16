# Superdesk UI Framework

### Status

[![Build Status](https://github.com/superdesk/superdesk-ui-framework/actions/workflows/test.yml/badge.svg)](https://github.com/superdesk/superdesk-ui-framework/actions/workflows/test.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/baf374b3-b994-4563-b4f0-f61e83c4e33a/deploy-status)](https://app.netlify.com/sites/inspiring-pasteur-fc7efb/deploys)

### Documentation

Documentation page can be accessed via this link: https://ui-framework.superdesk.org/

### Install and connect

To install the package via npm use

```
npm install --save superdesk-ui-framework
```

After installation, the ui-framework distributive files will be available as

```
import 'superdesk-ui-framework'
```

To use it in your angular-app you should add the module (modules)

```
angular.module('application', ['superdesk-ui'])
```

### React modules

To import react modules in your application, just use

```
import {LineInput} from 'superdesk-ui-framework'
```

### Storybook

The project includes Storybook 10 for interactive component development and documentation, integrated with the main documentation site.

#### Running Storybook

```bash
# Start Storybook in standalone development mode (with hot reload)
npm run storybook

# Build static Storybook for deployment
npm run build-storybook

# Copy Storybook to dist directory (included in main build)
npm run copy-storybook
```

#### Accessing Storybook

**Development mode** (npm start):

- Main docs: http://localhost:9100/
- Navigate to Storybook section in the main navigation
- Or access directly: http://localhost:9100/storybook/index.html

**Standalone mode** (npm run storybook):

- http://localhost:6006/

#### Integrated Deployment

Storybook is fully integrated with the main documentation site:

- `npm run build` automatically builds and copies Storybook to `dist/storybook/`
- Accessible as a 5th section in the main navigation
- Opens in a new tab, keeping main docs accessible
- Single deployment artifact includes both docs and Storybook

#### Features

- Interactive component playground with live prop editing
- Automatic documentation generation from TypeScript types
- Accessibility testing with built-in a11y addon
- Responsive design testing with viewport controls
- Full SCSS styling support

#### Creating Stories

For guidance on migrating components to Storybook, see [STORYBOOK_MIGRATION.md](./STORYBOOK_MIGRATION.md).

Example story structure:

```typescript
import type {Meta, StoryObj} from '@storybook/react';
import {YourComponent} from './YourComponent';

const meta = {
    title: 'Components/YourComponent',
    component: YourComponent,
    tags: ['autodocs'],
} satisfies Meta<typeof YourComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
    args: {
        // Your component props
    },
};
```

See `app-typescript/components/Button.stories.tsx` for a complete reference implementation.

### Contributing

1. Fork repo https://github.com/superdesk/superdesk-ui-framework
2. Clone `git clone https://github.com/superdesk/superdesk-ui-framework`
3. `npm install` to install dependencies
4. `npm start` to run server locally
5. Files are served on `localhost:9100`

### Creating playgrounds

1. Create new `your-playground.html` file in `examples/playgrounds`
2. Define new settings for your playground in `examples/index.js`:

```
.when('/playground/your-playground', {
    title: 'My Playground',
    playground: 'main', // can be publisher or react also
    template: require('../examples/playgrounds/your-playground.html')
})
```

3. Open your playground in browser

### Continuous Development

If you want to develop new components and see live changes on your project, you need to link `superdesk-ui-framework` with your project.

1. In `superdesk-ui-framework` project folder run `npm link`
2. In your project folder run `npm link superdesk-ui-framework`
3. Start `superdesk-ui-framework` with `npm run server` command.
4. All changes on superdesk-ui-framework project are now automatically updated in your project

### Testing

Runing `e2e&unit` tests

```
npm run lint
```
