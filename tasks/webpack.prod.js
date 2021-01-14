const merge = require('webpack-merge');
const webpackConfig = require('../webpack.config.js');

module.exports = merge(webpackConfig, {
    externals: [
        'react',
        'react-dom',
    ],
});
