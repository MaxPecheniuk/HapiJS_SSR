const axios = require('axios');
const url = require("../../config/apiConfig");

module.exports = {
  Query: {
    posts: (_,__,context) => {
      const loadPost = async () => await axios.get(url.apiUrl).then()
    }
  },
  Post: {
    comments: (ids, args, context) => {

      const loadComments = async (keys) => await Promise.all(keys.map((key) => httpCLient.get(key)));
      let loader = context.commentLoader;
      if (!loader) {
        context.commentLoader = loader = new DataLoader((keys) => loadComments(keys));
      }

      return loader.load(ids);
    }
  }

};