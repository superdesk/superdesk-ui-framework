module.exports = {
    core: {
        src: '../app/template/**/*.html',
        dest: 'app/templates-cache.generated.js',
        options: {
            htmlmin: {
                collapseWhitespace: true,
                collapseBooleanAttributes: true
            },
            bootstrap: (module, script) => '"use strict";\n' +
                        'angular.module("superdesk-ui.templates-cache", [])' +
                        '.run([\'$templateCache\', function($templateCache) {' + script + ' }]);'
        }
    },
    dev: {
        src: [],
        dest: 'app/templates-cache.generated.js',
        options: {bootstrap: () => ''}
    }
};
