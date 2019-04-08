const path = require("./path");
const webpack = require("webpack");
const paths = require("./paths");


module.export = {
  resolve: {
    // File extensions. Add others and needed (e.g. scss, json)
    extensions: [".js", ".jsx", "css", "scss"],
    modules: [path.resolve(paths.appSrc), "node_modules"],
  },
  entry: {
    path: path.resolve(paths.appIndexJs)
  },
  module: {
    rules: [

      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        include: [path.resolve(paths.appSrc)],
        use:
          // ["style-loader","css-loader","sass-loader"]
      }
    ]
  },

}
