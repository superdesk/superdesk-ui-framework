var webpackConfig = require('../webpack.config.js');

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
