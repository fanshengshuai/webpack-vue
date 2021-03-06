var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;

module.exports = {
    mode: "development",
    entry: "./src/app.js",
    plugins: [
        // new BundleAnalyzerPlugin(),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(["output/", "sourcemap"], {
            root: __dirname,
            //根目录
            verbose: true,
            //开启在控制台输出信息
            dry: false //启用删除文件
        }),
        new webpack.HotModuleReplacementPlugin(),

        new HtmlWebpackPlugin({
            title: "水滴宝",
            // filename: '../index.html',
            template: "src/index.html",
            minify: true,
            meta: {
                viewport: "width=device-width, initial-scale=1, maximum-scale=1.0,minimum-scale=1.0, user-scalable=no, shrink-to-fit=no",
                // Will generate: <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                "theme-color": "#4285f4"
                // Will generate: <meta name="theme-color" content="#4285f4">
            }
        })
    ],
    module: {
        rules: [{
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    loaders: {}
                    // other vue-loader options go here
                }
            },
            {
                test: require.resolve("zepto"),
                loader: "exports-loader?window.Zepto!script-loader"
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
                test: /\.css$/,
                loader: "style-loader!css-loader" //添加对样式表的处理
            },
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: "url-loader?name=fonts/[name].[md5:hash:hex:7].[ext]"
            }
        ]
    },
    resolve: {
        alias: {
            vue$: "vue/dist/vue.esm.js"
            // '^res/': 'vue/dist/vue.esm.js'
        }
    },
    devServer: {
        useLocalIp: true,
        host: "0.0.0.0",
        port: 8080,
        open: true,
        openPage: "jump.html",
        compress: true,
        hot: true,
        // contentBase: "./public/",//本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true, //实时刷新
        noInfo: false,
        progress: true,
        clientLogLevel: "info",
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        publicPath: "/wx/",
        headers: {
            "X-Powder": "www.7k999.com"
        },
        stats: {
            colors: true
        },

        historyApiFallback: true,
        proxy: {
            "/car/*": {
                target: "http://sdb.kuboluo.com/",
                secure: false,
                changeOrigin: true
            },
            "/res": {
                target: "http://sdb.kuboluo.com/res",
                secure: false,
                changeOrigin: true,
                pathRewrite: {
                    "^/res": ""
                }
            }
        }
    },
    performance: {
        hints: false
    },
    devtool: "#source-map"
};

if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "test") {
    module.exports.mode = "production";

    module.exports.output = {
        path: path.resolve(__dirname, "./output"),
        filename: "app.[hash:8].js",
        chunkFilename: "[name].[chunkhash:5].chunk.js"
    };

    module.exports.optimization = {
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
    };

    module.exports.devtool = false;
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: '"' + process.env.NODE_ENV + '"'
            }
        }),
        new webpack.SourceMapDevToolPlugin({
            filename: "../sourcemap/[file].map"
            // publicPath: 'https://127.0.0.1/project/',
            // fileContext: 'public'
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new ExtractTextPlugin({
            filename: "[name].[chunkhash:5].min.css",
            allChunks: true
        })
    ]);
}