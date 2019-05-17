const webpack = require('webpack');
const path = require('path');
const paths = require('./paths');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const env = process.env.NODE_ENV;
const LoadablePlugin = require('@loadable/webpack-plugin');

module.exports = {

  resolve: {
    // File extensions. Add others and needed (e.g. scss, json)
    extensions: ['.js', '.jsx', 'css', 'scss', '.ts', '.tsx', 'json'],
    modules: [path.resolve(paths.appSrc), 'node_modules'],
  },
  output: {
    path: path.resolve(paths.appPublic),
    publicPath: '/public/',
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  optimization: {
    // runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      //кол-во параллельных запросов
      // maxInitialRequests: Infinity,
      // //chunk min size
      // minSize: 0,
      // cacheGroups: {
      //   vendor: {
      //     test: /[\\/]node_modules[\\/]/,
      //     name(module) {
      //       // get package name
      //       const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
      //       return `npm.${packageName.replace('@', '')}`;
      //     },
      //   },
      // },
    },
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
        test: /\.tsx?$/,
        exclude: [/node_modules/, /__tests__/],
        include: path.resolve(paths.appSrc),
        loader: 'ts-loader'
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        include: [path.resolve(paths.appSrc)],
        use: [env === 'production' ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'sass-loader']
        // use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new LoadablePlugin({writeToDisk: true}),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env)
      }
    }),
    new MiniCssExtractPlugin({
      // filename: "[chunkhash]_[name].css",
      filename: '[name].css',
    })
  ],

}

