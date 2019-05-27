import { postsLoader } from '../loader/postsLoader';

export const postsResolver = {

  Query: {
    posts: (_, {title, lang}, context) => {
      return postsLoader(_, {title, lang}, context);
    },
  },
}