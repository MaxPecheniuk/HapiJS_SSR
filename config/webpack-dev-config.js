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
		client: path.resolve(paths.appIndexJs)
	},
	output: {
		path: path.resolve(paths.appPublic),
		publicPath: '/'
	},
	module: {
		rules: [

			{
				test: /\.(js|jsx)$/,
				include: path.resolve(paths.appSrc),
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["@babel/react"]
						}
					}
				]
			},
			{
				test: /\.(css|scss)$/,
				exclude: /node_modules/,
				include: [path.resolve(paths.appSrc)],
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader",

					},
					{
						loader: "sass-loader",
						options: {

							// This enables local scoped CSS based in CSS Modules spec
							modules: true,
						}
					}

				]
			}
		]
	},
	plugins: [
		//global const
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("development")
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