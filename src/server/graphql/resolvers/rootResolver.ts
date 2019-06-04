import { postsResolver } from './postsResolver';
import { postsByIdResolver } from './postByIdResolver';
import { authorResolver } from './authorsResolver';
import { commentsResolver } from './commentsResolver';

const { merge } = require('lodash');

const resolvers = merge(
  postsResolver,
  commentsResolver,
  authorResolver,
  postsByIdResolver,
);
export default resolvers;