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
                    'dist/superdesk-ui-framework.core.css': 'app/styles/app.scss'
                }
            }
        },
        cssmin: {
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
        },
        uglify: {
            options: {
                mangle: false
            },
            vendor: {
                files: {
                    'examples/js/vendor.js': [
                        'node_modules/jquery/dist/jquery.min.js',
                        'node_modules/underscore/underscore-min.js',
                        'node_modules/google-code-prettify/src/prettify.js',
                        'node_modules/angular/angular.min.js'
                    ]
                }
            },
            dist: {
                options: {
                    sourceMap: true
                },
                files: {
                    'dist/superdesk-ui-framework.js': [
                        'node_modules/angular-ui-bootstrap/ui-bootstrap.min.js',
                        'app/scripts/index.js',
                        'app/scripts/dropdown.js',
                        'app/scripts/modals.js',
                        'app/scripts/switch.js',
                        'app/scripts/check.js'
                    ]
                }
            }
        },
        pixrem: {
           options: {
             rootvalue: '10px',
             replace: true
           },
           dist: {
             src: 'dist/superdesk-ui-framework.core.css',
             dest: 'dist/superdesk-ui-framework.prefixed.css'
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
                files: ['examples/**/*.html'],
                options: {
                    livereload: true,
                    spawn: false
                }
            },
            sass: {
                files: ['app/styles/**/*.scss'],
                tasks: ['sass', 'cssmin'],
                options: {
                    livereload: true,
                    spawn: false
                }
            },
            uglify: {
                files: ['app/scripts/**/*.js'],
                tasks: ['uglify'],
                options: {
                    livereload: true,
                    spawn: false
                }
            }
        }
    });

    grunt.registerTask('build', [
        'sass',
        'cssmin',
        'uglify',
        'connect',
        'pixrem',
        'watch'
    ]);



};
