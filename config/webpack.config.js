const path = require('path');
const paths = require("./paths");

module.exports = {

	entry: {
		// client: path.resolve(__dirname,'../src/index.js')
		client: path.resolve(paths.appIndexJs)

	},

	output: {
		path: path.resolve(__dirname, '../public'),
		publicPath: '/'
	},
	module: {

		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.(css)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						options: {
							// discardDuplicates: true,
							importLoaders: 1,
							// This enables local scoped CSS based in CSS Modules spec
							modules: true,
						}
					}
				]
			}
		]
	}
}