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
        'sass',
        'cssmin',
        'uglify',
        'connect',
        'pixrem',
        'watch'
    ]);

    // Test task
    grunt.registerTask('test', [
        'karma:unit',
        'eslint'
    ]);
};
