const path = require("path");
const paths = require("./paths");
const webpack = require('webpack');
const TSLintPlugin = require('tslint-webpack-plugin');
const Port = 8080;
const HapiPort = 9080;
const Host = "localhost";

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry: {
    main: path.resolve(paths.appIndexJs),
    // PostsListLoader: path.resolve(paths.appPostsListLoader)
  },
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
    // open: true,
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
    }),

  ]
}