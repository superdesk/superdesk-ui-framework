import type {Preview} from '@storybook/react-webpack5';

// Import your existing styles
import '../app/styles/app.scss';
import '../app/styles/_stories.scss';

const preview: Preview = {
    parameters: {
        // Control which props get action logs
        actions: {
            argTypesRegex: '^on[A-Z].*',
        },

        // Shows table of contents right column
        docs: {
            toc: true,
        },

        // Control input types
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },

        // Background options for testing themes
        backgrounds: {
            default: 'light',
            values: [
                {name: 'light', value: '#ffffff'},
                {name: 'gray', value: '#f5f5f5'},
                {name: 'dark', value: '#1e1e1e'},
            ],
        },

        // Layout options
        layout: 'centered',
    },
};

export default preview;
