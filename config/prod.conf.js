const merge = require('webpack-merge')
const webpack = require('webpack')
var webpackConfig = require('./webpack.config.js')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = merge(webpackConfig, {
	mode : "production",
	output : {
	    path: process.env.outputDir,
	    filename: "app.[hash:8].js",
	    chunkFilename: "[name].[chunkhash:5].chunk.js"
	},
	optimization : {
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
	}
	,devtool : false,
	plugins : [
	    new webpack.DefinePlugin({
	        "process.env": {
	            NODE_ENV: '"' + process.env.NODE_ENV + '"'
	        }
	    }),
		new UglifyJsPlugin({
		  uglifyOptions: {
		    compress: {
		      warnings: false
		    }
		  },
		  sourceMap: false,
		  parallel: true
		}),
	    new webpack.SourceMapDevToolPlugin({
			append:false,
	        filename: "sourcemap/[file].map"
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
	],
	}
)