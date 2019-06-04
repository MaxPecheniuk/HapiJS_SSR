import DataLoader from 'dataloader';
import axios from 'axios';
import { apiUrl } from '../../config/apiConfig';

export const authorResolver = {
  Query: {
    authors: (_, __, context) => {
      const loaderAuthors = async (keys) =>
        await Promise.all(keys.map(() =>
          axios.get(apiUrl)
            .then((res) => res.data.authors)
            .catch((e) => {throw Error(e.response.statusText); })

        ));
      let loader = context.loaderAuthors;
      if (!loader) {
        context.loaderAuthors = loader = new DataLoader((key) => loaderAuthors(key));
      }
      return loader.load([]);
    }
  },

  Comment: {
    author: (comment, __, context) => {
      const loaderAuthor = async (keys) => await Promise.all(keys.map((key) =>
        axios.get(apiUrl)
          .then((res) => res.data.authors)
          .then(authors => authors.find(author => author.id === key.id))
          .catch((e) => {throw Error(e.response.statusText); })

      ));
      let loader = context.loaderAuthor;
      if (!loader) {
        context.loaderAuthor = loader = new DataLoader((key) => loaderAuthor(key));
      }
      return loader.load(comment.author);
    }
  }
};