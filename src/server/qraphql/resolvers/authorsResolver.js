const axios = require('axios');
const url = require('../../config/apiConfig');
const DataLoader = require('dataloader');

module.exports = {
  Post: {
    comments: (posts, __, context) => {
      const loaderComments = async (keys) => await Promise.all(keys.map((key) =>
        axios.get(url.apiUrl)
          .then((res) => res.data.comments)
          .then(comments => comments.filter(comment => key.includes(comment.id))
          )
      ));
      let loader = context.loaderComments;
      if (!loader) {
        context.loaderComments = loader = new DataLoader((key) => loaderComments(key))
      }
      return loader.load(posts.comment)
    },
  },
}