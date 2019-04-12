const webpack = require('webpack');
const path = require('path');
const paths = require('./paths');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const env = process.env.NODE_ENV;

module.exports = {

  resolve: {
    // File extensions. Add others and needed (e.g. scss, json)
    extensions: ['.js', '.jsx', 'css', 'scss'],
    modules: [path.resolve(paths.appSrc), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/, /__tests__/],
        include: path.resolve(paths.appSrc),
        use: ['babel-loader']
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        include: [path.resolve(paths.appSrc)],
        use: [env === 'production' ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env)
      }
    }),
    new MiniCssExtractPlugin({
      // filename: "[chunkhash]_[name].css",
      filename: "[name].css",
    })
  ],
}

