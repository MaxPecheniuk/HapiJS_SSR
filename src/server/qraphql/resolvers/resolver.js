const axios = require('axios');
const url = require('../../config/apiConfig');
const DataLoader = require('dataloader');
const postReducer = require('../reducers/postReducer');

module.exports = {
  Query: {

    posts: (_, __, context) => {
      // const ids = [1, 2, 3];
      //Лоадер вызываем промис для каждого ключа, который делает запрос.
      // const loaderPosts = async (keys) => await Promise.all(keys.map((key) => axios.get(url.apiUrl).then((res) => res.data.posts)));
      const loaderPosts = async (keys) => await Promise.all(keys.map((key) => axios.get(url.apiUrl).then((res) => res.data.posts)));
      //создаем контекст
      let loader = context.loaderPosts;
      if (!loader) {
        //создаем даталоадер и передаем в лоадер ключи
        context.loaderPosts = loader = new DataLoader((key) => loaderPosts(key))
      }
      return loader.load([])

    },
    comments: (ids, args, context) => {
      console.log('ids');

      console.log(ids);
      console.log(args);
      // const loadComments = async (keys) => await Promise.all(keys.map((key) => httpCLient.get(key)));
      // let loader = context.commentLoader;
      // if (!loader) {
      //   context.commentLoader = loader = new DataLoader((keys) => loadComments(keys));
      // }
      //
      // return loader.load(ids);
    }
  },




};