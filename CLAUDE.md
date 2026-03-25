# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start              # Dev server at localhost:9100
npm run storybook      # Storybook dev at localhost:6006
npm run unit-test      # Run Mocha tests
npm run lint           # Full lint suite (tsc + prettier + eslint + tslint + unit-test)
npm run lint-fix       # Auto-fix TSLint issues
npm run format-code    # Format with Prettier (--write)
npm run build          # Full production build (tsc → webpack → storybook → copy)
npm run watch          # Watch mode: webpack + tsc
```

There is no command to run a single test file directly. Tests are all run via `npm run unit-test`.

## Architecture

This is a React component library (with legacy Angular 1.x support) for the Superdesk journalism platform.

### Key directories

- `app-typescript/components/` — ~90 React/TypeScript components (primary deliverable). Each component can have a `.stories.tsx` alongside it.
- `app-typescript/index.ts` — All React components **must** be exported here for type definitions to be generated.
- `app/scripts/` — Angular 1.x modules and directives (legacy, do not add new components here).
- `app/styles/` — SCSS stylesheets (design tokens, component styles).
- `.storybook/` — Storybook 10 config (`main.ts`, `preview.ts`).
- `tasks/` — Webpack configurations (dev/prod).
- `dist/` — Build output (do not edit).

### Build outputs

- `dist/superdesk-ui.bundle.js` — UMD bundle (main entry point for consumers)
- `dist/superdesk-ui.bundle.css` — Extracted CSS
- `react/index.d.ts` — TypeScript declarations (generated from `app-typescript/index.ts`)
- `dist/storybook/` — Static Storybook (copied from `storybook-static/` after build)

### Testing

Tests use Mocha + Enzyme (adapter for React 16) + jsdom. Test files are co-located with components and match `app-typescript/**/*.spec.*`. Configuration is in `.mocharc.json`.

## React Component Conventions

- **TypeScript strict mode** is enforced (`noImplicitAny`, `noUnusedLocals`, etc.).
- Export every new component from `app-typescript/index.ts`.
- TSLint is used for `app-typescript/`; ESLint for `app/`.

## Storybook Stories

Story files are named `ComponentName.stories.tsx` and placed alongside the component in `app-typescript/components/`.

**Critical**: This project uses React 16, which requires explicit React import in every story file that uses JSX:

```typescript
import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
```

Story format (CSF 3.0):

```typescript
const meta = {
    title: 'Components/YourComponent',
    component: YourComponent,
    tags: ['autodocs'],
} satisfies Meta<typeof YourComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
    args: { /* default props */ },
};
```

Every component should have a `Playground` story. See `app-typescript/components/Button.stories.tsx` as the reference implementation.

Storybook uses the **Babel compiler** (not SWC) for CI compatibility — do not switch to SWC.

## Storybook Dev Integration

In dev mode (`npm start`), Storybook is served from `storybook-static/` at `/storybook/index.html` via webpack-dev-server. Run `npm run build-storybook` first if the storybook link is broken in dev mode.