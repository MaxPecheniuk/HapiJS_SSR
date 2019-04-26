import { postsLoader } from '../loader/postsLoader';

export const postsResolver = {

  Query: {
    posts: (_, __, context) => {
      return postsLoader(_, __, context);
    },
  },
}