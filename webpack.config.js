const path = require('path');
const webpack = require('webpack');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname), // to automatically find tsconfig.json
    entry: [
        'webpack/hot/only-dev-server',
        'webpack-dev-server/client?http://localhost:3000',
        'react-hot-loader/patch',
        './src/ts/index'
    ],
    devServer: {
        historyApiFallback: {
            index: 'index.html'
        }
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '',
        filename: 'app.js'
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'src')
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.less', '.json']
    },
    devtool: 'cheap-eval-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                exclude: /node_modules/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                loader: 'ts-loader'
            },
            {
                test: /\.s(a|c)ss$/i,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader', // translates CSS into CommonJS
                    options: {
                        sourceMap: true,
                        import: false
                    }
                }, {
                    loader: 'sass-loader', // compiles Sass to CSS
                    options: {
                        sourceMap: true,
                        javascriptEnabled: true
                    }
                }]
            },
            {
                test: /\.(le|c)?ss$/i,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                },{
                    loader: 'less-loader' // translates LESS into CommonJS
                }]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [{
                    loader: 'image-webpack-loader',
                    options: {
                        gifsicle: {
                            interlaced: false,
                        },
                        optipng: {
                            optimizationLevel: 7,
                        },
                    }
                }, {
                    loader: 'url-loader',
                    options: {
                        limit: 1000000
                    }
                }]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1000000,
                        mimetype: 'application/font-woff'
                    }
                }
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({hash: false, template: './public/index.hbs'}),
        new webpack.ProgressPlugin({profile: false}),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en|de/),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new webpack.LoaderOptionsPlugin({
            test: /\.s[a|c]ss$/,
            debug: true,
            options: {
                postcss: function () {
                    return [precss, autoprefixer];
                },
                context: path.join(__dirname, 'src'),
                output: {
                    path: path.join(__dirname, 'dist')
                }
            }
        })
    ],
    target: "electron-renderer" 
};