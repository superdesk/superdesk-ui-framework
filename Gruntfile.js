module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.config.init({
        ngtemplates: {
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
        },

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
                        'app/scripts/**/*.js'
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
        clean: {
            options: {force: true},
            structure: ['dist', '.tmp']
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
            appHtml: {
                files: ['app/template/**/*.html'],
                tasks: ['ngtemplates:core', 'uglify:dist'],
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
        'clean',
        'ngtemplates:core',
        'sass',
        'cssmin',
        'uglify',
        'connect',
        'pixrem',
        'watch'
    ]);
};
