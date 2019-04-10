const paths = require("./paths");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
	entry: {
		vendor: ["react"],
		universal: paths.appIndexJs,
	},
	mode: "production",
	 // '5124f5efa5436b5b5e7d_app.js'
	output: {
		// filename: "[chunkhash]_[name].js",
		filename: "[name].js",
		path: paths.appPublic,
		publicPath: "/"
	},
	plugins: [
		new UglifyJSPlugin(),
	],

};