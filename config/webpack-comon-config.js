const webpack = require("webpack");
const path = require("path");
const paths = require("./paths");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const ENV = process.env.NODE_ENV;

module.exports =  {
		plugins: [
			new webpack.DefinePlugin({
				"process.env": {
					NODE_ENV: JSON.stringify(ENV)
				}
			}),
			new MiniCssExtractPlugin("styles.css")
		],
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
          include: path.resolve(paths.appSrc),
					use: ['babel-loader'
            ]
				},
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: ['babel-loader']
				},
				{
					test: /\.(css|scss)$/,
					exclude: /node_modules/,
					include: [path.resolve(paths.appSrc)],

          use: (ENV === 'production') ? [MiniCssExtractPlugin.loader,"css-loader", "sass-loader"] : ["style-loader", "css-loader", "sass-loader"]


				}
			]
		}


}

