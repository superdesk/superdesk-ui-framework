# Storybook Integration Context (For AI Assistants)

This file provides context for AI assistants working on the Storybook integration in superdesk-ui-framework.

## Architecture Overview

Storybook 10.1.11 is fully integrated with the main documentation site (Angular-based, running on webpack-dev-server at port 9100). This is NOT a standalone Storybook deployment.

### Key Integration Points

1. **Build Integration** (package.json:24)

    - `npm run build` runs: tsc → webpack → tsc → build-storybook → copy-storybook
    - Storybook builds to `storybook-static/`
    - Copy script moves it to `dist/storybook/`
    - Single deployment artifact in `dist/` includes both docs and Storybook

2. **Development Mode**

    - Main docs: `npm start` → http://localhost:9100/
    - Standalone Storybook: `npm run storybook` → http://localhost:6006/
    - webpack-dev-server configured to serve `storybook-static/` at `/storybook` path (tasks/webpack.dev.js:23-26)

3. **Navigation**
    - Storybook link in main docs navigation opens in new tab (target="\_blank")
    - Located at: http://localhost:9100/storybook/index.html (in dev)
    - No custom back navigation needed - new tab keeps original context

## Important Files

### Storybook Configuration

- `.storybook/main.ts` - Main config, stories pattern, addons (uses Babel compiler), webpack customization for SCSS
- `.storybook/preview.ts` - Global parameters, imports app.scss for styling
- `.babelrc` - Babel configuration with TypeScript, React, and env presets (required for Babel compiler addon)
- `app-typescript/components/*.stories.tsx` - Component stories (CSF 3.0 format)

### Integration Files

- `package.json` - Build scripts with Storybook integration
- `tasks/webpack.dev.js` - Dev server config to serve Storybook static files
- `examples/pages/main.html` - Main docs page with Storybook nav link
- `examples/index.js` - Angular routing (no Storybook route needed)

### Documentation

- `STORYBOOK_MIGRATION.md` - Human-readable migration guide
- `README.md` - Updated with Storybook section

## Key Decisions & Rationale

1. **Why New Tab Instead of Embedded?**

    - Simpler: No iframe complexity or custom navigation code
    - Better UX: Users can easily switch between docs and Storybook
    - Cleaner: No JavaScript hacks needed

2. **Why Integrated Build?**

    - Single deployment: `dist/` contains everything
    - Consistent versioning: Docs and Storybook always in sync
    - Simpler CI/CD: One build, one deploy

3. **Why Not manager-api/theming packages?**

    - Incompatible: These are for Storybook 8.x, project uses 10.x
    - Not needed: New tab approach doesn't require customization

4. **Why Babel Compiler Instead of SWC?**
    - CI Compatibility: SWC native bindings fail in GitHub Actions and other CI environments
    - Stability: Babel doesn't require platform-specific native bindings
    - Compatibility: Works reliably across different platforms (macOS, Linux, Windows)
    - Trade-off: Slightly slower build times, but more reliable deployments

## Component Story Pattern

Reference implementation: `app-typescript/components/Button.stories.tsx`

Required structure:

1. Meta object with title, component, parameters, tags, argTypes
2. Default export of meta
3. Story type from StoryObj
4. Playground story (required) - interactive with all controls
5. Additional example stories as needed

## Common Tasks

### Adding a New Story

1. Create `ComponentName.stories.tsx` in `app-typescript/components/`
2. Follow the pattern in Button.stories.tsx
3. Stories auto-discovered by pattern: `app-typescript/**/*.stories.@(ts|tsx)`
4. No config changes needed

### Modifying Storybook Config

- Edit `.storybook/main.ts` for addons, webpack, stories pattern
- Edit `.storybook/preview.ts` for global styles, parameters
- Restart `npm run storybook` to see changes

### Building for Deployment

```bash
npm run build
# Outputs to dist/ including dist/storybook/
```

### Testing Integration

```bash
npm start  # Main docs at :9100
# Navigate to Storybook link - should open in new tab at :9100/storybook/
```

## Technology Stack

- **Storybook**: 10.1.11 with React webpack5 framework
- **Compiler**: Babel (via @storybook/addon-webpack5-compiler-babel) with TypeScript, React, and env presets
- **React**: 16.14.0 (legacy version, some React 18 hooks unavailable)
- **TypeScript**: 5.9.3 with react-docgen-typescript
- **Build**: webpack 5 with custom SCSS support
- **Docs**: Angular 1.7.9 with hash-based routing

## Constraints & Limitations

1. **React 16**: No useId, useInsertionEffect, useDeferredValue, etc.
2. **No Storybook 8 packages**: manager-api, theming only exist for 8.x
3. **Angular routing**: Main docs use Angular + hash routing, Storybook is separate
4. **SCSS required**: Must maintain SCSS support in Storybook webpack config

## Migration Status

- ✅ Storybook 10 installed and configured
- ✅ SCSS/styles working
- ✅ Button component migrated as reference
- ✅ Build integration complete
- ✅ Dev server integration complete
- ✅ Documentation updated
- 🔄 Additional components to migrate (see STORYBOOK_MIGRATION.md)

## Troubleshooting

### Storybook doesn't build

- Check for TypeScript errors: Stories must have valid TS
- Verify story files match pattern in .storybook/main.ts
- Ensure component imports are correct

### Styles not loading

- Verify `import '../app/styles/app.scss'` in .storybook/preview.ts
- Check webpack config in .storybook/main.ts has SCSS loaders

### Link doesn't work in dev mode

- Ensure `npm run build-storybook` was run after changes
- Verify `storybook-static/` directory exists
- Check webpack-dev-server config serves /storybook path

### SWC native binding errors in CI

If you see "Failed to load native binding" errors:

- This is why we use Babel compiler instead of SWC
- Verify `.storybook/main.ts` uses `@storybook/addon-webpack5-compiler-babel` (not swc)
- Ensure `.babelrc` exists with correct presets
- Required packages: `@babel/preset-env`, `@babel/preset-react`, `@babel/preset-typescript`

## Future Considerations

1. **Component Migration**: Gradually migrate more components to Storybook
2. **React 18 Upgrade**: Would unlock more Storybook features
3. **Automated Testing**: Consider adding interaction tests
4. **Visual Regression**: Consider adding Chromatic or similar
