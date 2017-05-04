module.exports = {
    options: {
        configFile: 'karma.conf.js',
        singleRun: true,
        autoWatch: false,
        reporters: ['dots']
    },
    single: {
        reporters: 'dots'
    },
    watch: {
        singleRun: false,
        autoWatch: true,
        reporters: 'dots'
    },
    unit: {
        coverageReporter: {
            type: 'html',
            dir: 'report/'
        }
    }
};
