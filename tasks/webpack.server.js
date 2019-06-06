
const merge = require('webpack-merge');
const webpackConfig = require('../webpack.config.js');

module.exports = merge(webpackConfig, {
    stats: {
        colors: true
    },

    devtool: 'eval',

    devServer: {
        contentBase: './dist',
        open: false,
        port: 9100
    }
});
