const axios = require('axios');
const url = require('../../config/apiConfig');
const DataLoader = require('dataloader');
module.exports = {
  Comment: {
    author: (comment, __, context) => {

      const loaderAuthor = async (keys) => await Promise.all(keys.map((key) =>
        axios.get(url.apiUrl)
        // comments array
          .then((res) => res.data.authors)
          .then(authors => authors.find(author => author.id === key.id))
      ));
      let loader = context.loaderAuthor;
      if (!loader) {
        context.loaderAuthor = loader = new DataLoader((key) => loaderAuthor(key))
      }
      return loader.load(comment.author)
    }
  },
}