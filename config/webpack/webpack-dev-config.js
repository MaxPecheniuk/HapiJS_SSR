const path = require("path");
const paths = require("./paths");
const webpack = require('webpack');

const Port = 8080;
const HapiPort = 9080;
const Host = "localhost";

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    main: path.resolve(paths.appIndexJs)
  },
  // output: {
  //   path: path.resolve(paths.appPublic),
  //   publicPath: '/public/',
  //   filename: "[name].js",
  //   chunkFilename: "[name].js"
  // },
  // optimization: {
  //   runtimeChunk: 'single',
  //   splitChunks: {
  //     chunks: 'all',
  //     //кол-во параллельных запросов
  //     maxInitialRequests: Infinity,
  //     //chunk min size
  //     minSize: 0,
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name(module) {
  //           // get package name
  //           const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
  //           return `npm.${packageName.replace('@', '')}`;
  //         },
  //       },
  //     },
  //   },
  // },

  // output: {
  //   path: path.resolve(paths.appDist),
  //   filename: 'client.js',
  //   publicPath: '/public/'
  // },

  devServer: {
    port: Port,
    host: Host,
    proxy: {
      '*': {
        target: `http://${Host}:${HapiPort}`,
        onError: function onError(err, req, res) {
          if(err){
            req.setTimeout(3500)

          }
        }

      }
    },
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    hot:true,
    quiet: false,
    noInfo: false,
    watchContentBase: true,
    after() {
      process.stdout.write(`Dev server is running: http://${Host}:${Port}\n`);
    }
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin({
      multiStep: true
    })
  ]
}