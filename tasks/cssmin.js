module.exports = {
    options: {
        sourceMap: true
    },
    vendor: {
        options: {sourceMap: false},
        files: {
            'examples/css/vendor.css': [
                'node_modules/google-code-prettify/src/prettify.css',
                'node_modules/google-code-prettify/styles/sons-of-obsidian.css'
            ]
        }
    },
    dist: {
        files: {
            'dist/superdesk-ui-framework.min.css': [
                'dist/superdesk-ui-framework.core.css'
            ]
        }
    }
};
