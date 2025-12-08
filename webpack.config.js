const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
            'react-resizable-panels': path.resolve(
                __dirname,
                './node_modules/react-resizable-panels/dist/react-resizable-panels.development.js',
            ),
        },
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                loader: 'ts-loader',
                exclude: (absolutePath) => {
                    // date-fns uses optional chaining and nullish coalescing
                    // that crashes the build unless passed though the loader
                    if (
                        absolutePath.includes('/node_modules/date-fns/') ||
                        absolutePath.includes('/node_modules/@date-fns/tz/')
                    ) {
                        return false;
                    }

                    return absolutePath.includes('/node_modules/');
                },
                options: {
                    transpileOnly: true,
                },
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
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
                    esModule: false,
                },
            },
        ],
    },

    plugins: [
        new CleanWebpackPlugin(['dist', 'react']),

        new HtmlWebpackPlugin({
            template: 'examples/index.html',
            chunks: ['vendor', 'examples', 'superdesk-ui'],
            chunksSortMode: 'manual',
        }),

        new CopyWebpackPlugin([{from: 'examples/img/', flatten: true}, {from: 'examples/pages/'}]),

        new MiniCssExtractPlugin({
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
