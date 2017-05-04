module.exports = {
    options: {
        config: '.eslintrc.json'
    },

    app: {
        src: [
            'app/scripts/**/*.js',
            '!app/scripts/helpers/*.js'
        ],
        envs: ['browser', 'amd']
    },

    specs: {
        src: ['spec/**/*.js'],
        envs: ['node', 'jasmine']
    },

    tasks: {
        src: 'tasks/*.js',
        envs: ['node']
    }
};
