const path = require("path");
const paths = require("./paths");
const webpack = require("webpack");

const Port = 8080;
const HapiPort = 9080;
const Host = "localhost";

module.exports = {
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
		filename: 'client.js'
		// publicPath: '/'
	},
	module: {
		rules: [

			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader']
			},
			{
				test: /\.(css|scss)$/,
				exclude: /node_modules/,
				include: [path.resolve(paths.appSrc)],
				use: ["style-loader","css-loader","sass-loader"]
			}
		]
	},
	plugins: [
		//global const
		new webpack.DefinePlugin({

			"process.env": {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV)
			}
		})
	],
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
}