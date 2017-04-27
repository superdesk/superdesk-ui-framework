//jshint strict: false
exports.config = {

    allScriptsTimeout: 11000,

    specs: [
        'spec/*.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:9100/',

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }

};
