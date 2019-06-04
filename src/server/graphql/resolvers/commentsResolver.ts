import axios from 'axios';
import { apiUrl } from '../../config/apiConfig';
import DataLoader from 'dataloader/index';

export const commentsResolver = {
  Post: {
    comments: (posts, __, context) => {
      const loaderComment = async (keys) => await Promise.all(keys.map((key) =>
        axios.get(apiUrl)
          .then(res => res.data.comments)
          .then(comments => comments.filter(comment => key.includes(comment.id)))
          .catch((e) => {throw Error(e.response.statusText); })

      ));
      let loader = context.loaderComment;
      if (!loader) {
        context.loaderComment = loader = new DataLoader((key) => loaderComment(key));
      }
      return loader.load(posts.commentsIds);
    }
  },

  Query: {
    comments: (_, ids, context) => {
      const loaderComments = async (keys) =>
        await Promise.all(keys.map((key) =>
          axios.get(apiUrl)
            .then((res) => res.data.comments)
            .then(comments => comments.find(item => item.id === key))
            .catch((e) => {throw Error(e.response.statusText); })

        ));
      let loader = context.loaderComments;
      if (!loader) {
        context.loaderComments = loader = new DataLoader((key) => loaderComments(key));
      }
      return loader.loadMany(ids.id);
    }
  }
};