const path = require("path");
const paths = require("./paths");


const Port = 8080;
const HapiPort = 9080;
const Host = "localhost";

module.exports = {
  mode: "development",
  devtool: "eval",
  entry: {
    path: path.resolve(paths.appIndexJs)
  },
  output: {
    path: path.resolve(paths.appDist),
    filename: 'client.js',
    publicPath: '/'
  },

  devServer: {
    port: Port,
    host: Host,
    proxy: {
      '*': {
        target: `http://${Host}:${HapiPort}`,
      }
    },
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    quiet: false,
    noInfo: false,
    watchContentBase: true,
    after() {
      process.stdout.write(`Dev server is running: http://${Host}:${Port}\n`);
    }
  }
}