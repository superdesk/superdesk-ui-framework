var path = require('path');

module.exports = function (grunt) {

    // Auto-load tasks
    require('load-grunt-tasks')(grunt);

    // Auto-load configuration
    require('load-grunt-config')(grunt, {
        configPath: path.join(__dirname, 'tasks')
    });

    // Register grunt tasks
    grunt.registerTask('build', [
        'clean',
        'webpack:build'
    ]);

    // Register grunt tasks
    grunt.registerTask('build-dev', [
        'clean',
        'webpack:build-dev'
    ]);

    // Register grunt tasks
    grunt.registerTask('server', [
        'clean',
        'webpack-dev-server:start'
    ]);

    // Test task
    grunt.registerTask('test', [
        'karma:unit',
        'eslint'
    ]);
};
