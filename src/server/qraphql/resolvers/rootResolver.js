import { postsResolver } from './postsResolver';
import { commentsResolver } from './commentsResolver';
import { authorResolver } from './authorsResolver';
const { merge } = require('lodash');

const resolvers = merge(postsResolver, commentsResolver, authorResolver);
export default resolvers;