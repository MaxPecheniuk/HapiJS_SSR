const axios = require('axios');
const url = require('../../config/apiConfig');
const DataLoader = require('dataloader');
module.exports = {
  Query: {
    posts: (_, __, context) => {
      const loaderPosts = async (keys) => await Promise.all(keys.map((key) => axios.get(url.apiUrl).then((res) => res.data.posts)));
      let loader = context.loaderPosts;
      if (!loader) {
        context.loaderPosts = loader = new DataLoader((key) => loaderPosts(key))
      }
      return loader.load([])
    },
  },
}