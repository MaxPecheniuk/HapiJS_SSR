import axios from 'axios';
import { apiUrl } from '../../config/apiConfig';
import DataLoader from 'dataloader';

export const postsByIdResolver = {

  Query: {
    postById: (_, {id}, context) => {
      const loaderPost = async (keys) => await Promise.all(keys.map(() =>
        axios.get(apiUrl)
          .then(res => res.data.posts)
          .then(post => post.find(item => item.id === id))
          .catch((e) => {throw Error(e.response.statusText); })

      ));
      let loader = context.loaderPost;
      if (!loader) {
        context.loaderPost = loader = new DataLoader((key) => loaderPost(key));
      }
      return loader.load([]);
    },
  },
};