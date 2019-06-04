import axios from 'axios';
import { apiUrl } from '../../config/apiConfig';
import DataLoader from 'dataloader';

const findPost = (posts, title, lang) => {
  return posts.filter(item => item.title[lang].toLowerCase().includes(title));
};

export const postsResolver = {

  Query: {
    posts: (_, {title, lang}, context) => {
      const loaderPosts = async (keys) =>
        await Promise.all(keys.map(() =>
          axios.get(apiUrl)
            .then((res) => res.data.posts)
            .then(posts => title !== undefined ? findPost(posts, title, lang) : posts)
            .catch((e) => {throw Error(e.response.statusText); })
        ));

      let loader = context.loaderPosts;
      if (!loader) {
        context.loaderPosts = loader = new DataLoader((key) => loaderPosts(key));
      }
      return loader.load([]);
    },
  },
};