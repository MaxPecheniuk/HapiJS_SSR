const path = require("path");
const common = require("./webpack-comon-config");
const merge = require("webpack-merge");
const paths = require("./paths");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports =  merge(common, {
	entry: {
		vendor: ["react"],
		app: paths.appIndexJs
	},
	mode: "production",
	 // '5124f5efa5436b5b5e7d_app.js'
	output: {
		// filename: "[chunkhash]_[name].js",
		filename: "[name].js",
		path: paths.appBuild,
		publicPath: "/"
	},
	plugins: [
		new UglifyJSPlugin(),
	],

});