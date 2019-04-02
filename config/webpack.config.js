const path = require('path');

module.exports = {

	entry: {
		client: './src/client.js'
	},

	output: {
		path: path.resolve(__dirname, 'public'),
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
				test: /\.(css|scss)$/,
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