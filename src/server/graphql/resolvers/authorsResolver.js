import { authorsLoader } from '../loader/authorsLoader';
import { authorsQuery } from '../queries/authorsQuery';

export const authorResolver = {
  Query: {
    authors: (_, __, context) => {
      return authorsQuery(_, __, context)
    }
  },

  Comment: {
    author: (comment, __, context) => {
      return authorsLoader(comment, __, context)
    }
  }
}