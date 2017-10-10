const webpackConfig = require('../webpack.config.js');
const path = require('path');

module.exports = {
    options: {
        webpack: webpackConfig,
        stats: 'errors-only'
    },
    start: {
        open: true,
        port: 9100,
        webpack: {
            devtool: 'eval'
        }
    }
};
