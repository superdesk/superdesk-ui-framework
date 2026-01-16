const {merge} = require('webpack-merge');
const webpackConfig = require('../webpack.config.js');

module.exports = merge(webpackConfig, {
    mode: 'development',

    stats: {
        colors: true,
    },

    devtool: 'eval',

    devServer: {
        open: true,
        port: 9100,
        host: '127.0.0.1',
        // Serve static assets for dev server so they work in examples
        static: [
            {
                directory: require('path').join(__dirname, '../examples/img/guidelines'),
                publicPath: '/',
            },
        ],
    },
});
