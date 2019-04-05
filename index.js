require("@babel/register");
const csshook = require('css-modules-require-hook');
const scssParser = require('postcss-scss').parse;

csshook({
	generateScopedName: '[name]__[local]___[hash:base64:5]'
});
csshook({
	extensions: '.scss',
	processorOpts: {parser: scssParser}
});

require('./src/server/server');

