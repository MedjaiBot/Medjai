const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

/*
 * We've enabled ExtractTextPlugin for you. This allows your app to
 * use css modules that will be moved into a separate CSS file instead of inside
 * one of your module entries!
 *
 * https://github.com/webpack-contrib/extract-text-webpack-plugin
 *
 */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

let srcDirectory = path.resolve(__dirname, './src/');

module.exports = {
    entry: path.resolve(srcDirectory, 'index.tsx'),

    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [{
            test: /\.tsx?$/,
            include: [
                /src/,
                /node_modules/
            ],
            loader: 'ts-loader',
            resolve: {
                extensions: ['.ts', '.tsx']
            },
            exclude: [
                /__tests__/
            ]
        }, {
            test: /\.(scss|css)$/,

            use: [{
                loader: MiniCssExtractPlugin.loader
            }, {
                loader: 'css-loader',

                options: {
                    sourceMap: true
                }
            }, {
                loader: 'sass-loader',

                options: {
                    sourceMap: true
                }
            }]
        }]
    },

    plugins: [
        new CopyWebpackPlugin
        ([
            {from: path.join(srcDirectory, 'images'), to: 'images'}
        ]),
        new UglifyJSPlugin(),
        new MiniCssExtractPlugin({ filename: 'app.[chunkhash].css' }),
        new HtmlWebpackPlugin
        ({
            inject: true,
            template: path.join(srcDirectory, '../public/index.html')
        })
    ],

    mode: 'production',

    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            minChunks: 1,
            name: false,

            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                }
            }
        }
    }
};
