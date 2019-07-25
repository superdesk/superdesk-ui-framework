const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');

const config = {
    entry: {
        vendor: './app/vendor.js',
        examples: './examples/index.js',
        'superdesk-ui': './app/index.js',
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        libraryTarget: 'umd',
        chunkFilename: '[name].chunk.js',
    },

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
            'superdesk-ui': path.resolve(__dirname, './app'),
        },
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-object-rest-spread'],
                },
            },
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    transpileOnly: true,
                },
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!sass-loader',
                }),
            },
            {
                test: /\.css/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                }),
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.(png|gif|jpeg|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                },
            },
        ],
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: 'examples/index.html',
            chunks: ['vendor', 'examples', 'superdesk-ui'],
            chunksSortMode: 'manual',
        }),
        new CopyWebpackPlugin([
            {from: 'examples/img/', flatten: true},
        ]),
        new ExtractTextPlugin({
            filename: '[name].bundle.css',
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            'window.$': 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        }),
    ],
};

module.exports = config;