import type {StorybookConfig} from '@storybook/react-webpack5';

const config: StorybookConfig = {
    stories: ['../app-typescript/**/*.mdx', '../app-typescript/**/*.stories.@(ts|tsx)'],

    addons: [
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-a11y',
        '@storybook/addon-docs',
    ],

    framework: '@storybook/react-webpack5',

    typescript: {
        check: false, // We already check with tsc in lint
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            compilerOptions: {
                allowSyntheticDefaultImports: true,
                esModuleInterop: true,
            },
            propFilter: (prop) => {
                // Filter out node_modules props
                if (prop.parent) {
                    return !prop.parent.fileName.includes('node_modules');
                }
                return true;
            },
        },
    },

    webpackFinal: async (config) => {
        // Add SCSS support
        config.module?.rules?.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        });

        return config;
    },
};

export default config;
