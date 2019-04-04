require("@babel/register")({
	extends: './.babelrc'
});
require('./src/server/server');

