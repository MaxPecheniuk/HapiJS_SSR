const webpack = require("webpack");
const path = require("path");
const paths = require("./paths");
const merge = require("webpack-merge");
const common = require("./webpack-comon-config");

const Port = 8080;
const HapiPort = 9080;
const Host = "localhost";

module.exports = merge(common, {
	mode: "development",
	devtool: "eval",
	resolve: {
		// File extensions. Add others and needed (e.g. scss, json)
		extensions: [".js", ".jsx", "css", "scss"],
		modules: [path.resolve(paths.appSrc), "node_modules"],
	},
	entry: {
		path: path.resolve(paths.appIndexJs)
	},
	output: {
		path: path.resolve(paths.appPublic),
		filename: 'client.js',
		publicPath: '/'
	},

	devServer: {
			port: Port,
			host: Host,
			proxy: {
				'*': {
					target: `http://${Host}:${HapiPort}`,
				}
			},
		overlay: {
			warnings: false,
			errors: true
		},
		quiet: false,
		noInfo: false,
		watchContentBase: true,
		after() {
			process.stdout.write(`Dev server is running: http://${Host}:${Port}\n`);
		}
}
})