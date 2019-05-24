import axios from 'axios';
import DataLoader from 'dataloader';
import { apiUrl } from '../../config/apiConfig';
import {store} from '../server';

export const postsLoader = (_, {title}, context) => {
  const loaderPosts = async (keys) =>
    await Promise.all(keys.map(() =>
      axios.get(apiUrl)
        .then((res) => res.data.posts)
        .then(posts => title !== undefined ? findPost(posts, title) : posts)
        .catch((e) => throw Error(e.response.statusText))));

  let loader = context.loaderPosts;
  if (!loader) {
    context.loaderPosts = loader = new DataLoader((key) => loaderPosts(key))
  }
  return loader.load([])
};

const findPost = (posts, title) => {
  const language = store.getState().localesReducer.language;
  return posts.filter(item => item.title[language].toLowerCase().includes(title))
};
