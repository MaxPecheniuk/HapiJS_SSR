import { postsResolver } from './postsResolver';
import { commentsResolver } from './commentsResolver';
import { authorResolver } from './authorsResolver';
import { postsByIdResolver } from "./postByIdResolver";
import { searchPostResolver } from './serachPostResolver';
const { merge } = require('lodash');

const resolvers = merge(
  postsResolver,
  commentsResolver,
  authorResolver,
  postsByIdResolver,
  searchPostResolver
);
export default resolvers;