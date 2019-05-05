import { commentsLoader } from '../loader/commentsLoader';
import { commentsQuery } from '../queries/commensQuery';



export const commentsResolver = {
  Post: {
    comments: (posts, __, context) => {
      return commentsLoader(posts, __, context);
    }
  },

  Query: {
    comments: (_, ids, context) => {
      return commentsQuery(_, ids, context)
    }
  }
}