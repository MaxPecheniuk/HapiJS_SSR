const path = require("path");
const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const paths = require("./paths");


module.exports =  {
	entry: {
		vendor: ["react"],
		app: paths.appIndexJs
	},
	mode: "production",

	 // '5124f5efa5436b5b5e7d_app.js'
	output: {
		filename: "[chunkhash]_[name].js",
		path: paths.appBuild,
		publicPath: "/"
	},
	plugins: [

		new UglifyJSPlugin(),

		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("production")
			}
		}),
		// Extract text/(s)css from a bundle, or bundles, into a separate file.
		new MiniCssExtractPlugin("styles.css")
	],

	module: {

		rules: [
			{
				test: /\.(js|jsx)$/,
				include: path.resolve(paths.appSrc),
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /\.(css|scss)$/,
        exclude: /node_modules/,
        include: [path.resolve(paths.appSrc)],
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader","sass-loader"
				]

			}
		]
	}
};