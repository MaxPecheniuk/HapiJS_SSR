const devConfig = require('./webpack-dev-config');
const prodConfig = require('./webpack-prod-config');
const merge = require("webpack-merge");
const env = process.env.NODE_ENV;

if (env === 'production') {
  module.exports = merge(prodConfig,{})
} else {
  module.exports  = merge(devConfig,{})
}
