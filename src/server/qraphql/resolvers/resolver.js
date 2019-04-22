const axios = require('axios');
const url = require('../../config/apiConfig');
const DataLoader = require('dataloader');
const postReducer = require('../reducers/postReducer');

module.exports = {
	Post: {
		comments: (ids,__, context) =>{
			console.log('context');
			const loaderComments = async (keys) => await Promise.all(keys.map((key) => axios.get(url.apiUrl).then((res) => res.data.posts)));
			//создаем контекст
			let loader = context.loaderComments;
			console.log(context);

			if (!loader) {
				//создаем даталоадер и передаем в лоадер ключи
				context.loaderComments = loader = new DataLoader((key) => loaderComments(key))
			}
			return loader.load(ids)
		},
	},


  Query: {
    posts: (_, __, context) => {
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


  },




};