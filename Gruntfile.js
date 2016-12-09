module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.config.init({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'dist/superdesk-ui-framework.css': 'app/styles/app.scss'
                }
            }
        },
        connect: {
            options: {
                hostname: 'localhost',
                port: 9100,
                open: 'http://localhost:9100/examples',
                livereload: true
            },
            examples: {}
        },
        watch: {
            html: {
                files: ['examples/*.html'],
                options: {
                    livereload: true,
                    spawn: false
                }
            },
            sass: {
                files: ['app/styles/*.scss'],
                tasks: ['sass'],
                options: {
                    livereload: true,
                    spawn: false
                }
            }
        }
    });

    grunt.registerTask('build', [
        'sass',
        'connect',
        'watch'
    ]);
};
