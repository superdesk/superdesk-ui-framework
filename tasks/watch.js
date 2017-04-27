module.exports = {
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
};
