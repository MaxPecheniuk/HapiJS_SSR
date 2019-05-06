import { searchPostsLoader } from '../loader/searchPostLoader';

export const searchPostResolver = {

  Query: {
    searchPosts: (_, {title}, context) => {
      return searchPostsLoader(_, {title}, context);
    },
  },
}
