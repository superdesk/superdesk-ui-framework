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
        'ngtemplates:core',
        'webpack:build'
    ]);

    // Register grunt tasks
    grunt.registerTask('server', [
        'clean',
        'ngtemplates:dev',
        'webpack-dev-server:start'
    ]);

    // Test task
    grunt.registerTask('test', [
        'karma:unit',
        'eslint'
    ]);
};
