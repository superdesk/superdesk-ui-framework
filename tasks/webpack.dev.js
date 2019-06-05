const merge = require('webpack-merge');
const webpackConfig = require('../webpack.config.js');

module.exports = merge(webpackConfig, {
    stats: {
        colors: true
    },

    devtool: 'eval',

    devServer: {
        open: true,
        port: 9100
    }
});
