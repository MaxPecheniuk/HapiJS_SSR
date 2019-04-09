"use strict";

require("@babel/register");

var csshook = require('css-modules-require-hook');

var scssParser = require('postcss-scss').parse;

csshook({
  generateScopedName: '[name]__[local]___[hash:base64:5]'
});
csshook({
  extensions: '.scss',
  processorOpts: {
    parser: scssParser
  }
});

require('./server');