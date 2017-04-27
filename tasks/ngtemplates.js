module.exports = {
    core: {
        src: 'app/template/**/*.html',
        dest: '.tmp/templates-cache.generated.js',
        options: {
            htmlmin: {
                collapseWhitespace: true,
                collapseBooleanAttributes: true
            },
            bootstrap: function (module, script) {
                return '"use strict";\n' +
                        'angular.module("superdesk-ui.templates-cache", [])' +
                        '.run([\'$templateCache\', function($templateCache) {' + script + ' }]);';
            }
        }
    }
};
