import { postsResolver } from './postsResolver';
import { commentsResolver } from './commentsResolver';
import { authorResolver } from './authorsResolver';
import { postsByIdResolver } from "./postByIdResolver";
const { merge } = require('lodash');

const resolvers = merge(postsResolver, commentsResolver, authorResolver, postsByIdResolver);
export default resolvers;