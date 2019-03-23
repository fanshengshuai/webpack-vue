const merge = require('webpack-merge')
const webpack = require('webpack')
var webpackConfig = require('./webpack.config.js')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// var ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

var config = merge(webpackConfig, {
    mode: "production",
    output: {
        path: process.env.outputDir,
        filename: "app.[hash:8].js",
        chunkFilename: "[name].[chunkhash:5].chunk.js"
    },

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false // set to true if you want JS source maps
            }),
            new OptimizeCSSAssetsPlugin({}),
        ],
        // minimize: true,
        runtimeChunk: {
            //   name: entrypoint => `runtime~${entrypoint.name}`
            name: "runtime"
        },

        splitChunks: {
            chunks: "all",
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: "~",
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },
    devtool: false,
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: '"' + process.env.NODE_ENV + '"'
            }
        }),
        // new webpack.SourceMapDevToolPlugin({
        //     append: false,
        //     filename: "sourcemap/[file].map"
        //     // publicPath: 'https://127.0.0.1/project/',
        //     // fileContext: 'public'
        // }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].[hash:8].css',
            chunkFilename: '[name].[id].[hash:8].css',
        })
        // new ExtractTextPlugin({
        //     filename: "[name].[chunkhash:5].min.css",
        //     allChunks: true
        // })
    ],
})

config.module.rules = [{
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
            loaders: {
                // js: 'babel',
                css: [MiniCssExtractPlugin.loader, "css-loader"],
                sass:  [MiniCssExtractPlugin.loader, 'css-loader', 'scss-loader']
            }
            // other vue-loader options go here
        }
    },
    {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
    },
    {
        test: /\.(sass|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'scss-loader']
    },
    {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
    },
    {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "url-loader?limit=8192&name=[name].[hash:8].[ext]"
        /*,options: {
                name: '[name].[ext]?[hash]'
            }*/
    },
    {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        loader: "url-loader?name=fonts/[name].[md5:hash:hex:7].[ext]"
    }
]

module.exports = config;