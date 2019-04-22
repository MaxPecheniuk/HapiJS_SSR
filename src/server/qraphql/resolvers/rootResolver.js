const posts = require('./postsResolver');
const comments = require('./commentsResolver');
const authors = require('./authorsResolver');

const { merge } = require('lodash');


module.exports = merge(posts, comments, authors);