var path = require("path");
const rm = require('rimraf')

var webpack = require('webpack')

process.env.NODE_ENV = "production";
process.env.outputDir = path.resolve(__dirname, "../output")

var webpackConfig = require('./prod.conf.js')



rm(process.env.outputDir, err => {
	webpack(webpackConfig, function(err, stats) {
		process.stdout.write(stats.toString({
			colors: true,
			modules: false,
			children: false,
			chunks: false,
			chunkModules: false
		}))
		
		rm(process.env.outputDir+"/sourcemap", err => {
		  if (err) throw err
		});
	})
})