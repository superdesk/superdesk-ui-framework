module.exports = {
    options: {
        mangle: false
    },
    vendor: {
        files: {
            'examples/js/vendor.js': [
                'node_modules/jquery/dist/jquery.min.js',
                'node_modules/underscore/underscore-min.js',
                'node_modules/google-code-prettify/src/prettify.js',
                'node_modules/angular/angular.min.js',
                'node_modules/angular-animate/angular-animate.min.js'
            ]
        }
    },
    dist: {
        options: {
            sourceMap: true
        },
        files: {
            'dist/superdesk-ui-framework.js': [
                '.tmp/templates-cache.generated.js',
                'app/scripts/**/*.js',
                '!app/scripts/**/*.test.js'
            ]
        }
    }
};
