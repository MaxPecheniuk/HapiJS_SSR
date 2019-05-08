import { postsLoader } from '../loader/postsLoader';

export const postsResolver = {

  Query: {
    posts: (_, {title}, context) => {
      return postsLoader(_, {title}, context);
    },
  },
}