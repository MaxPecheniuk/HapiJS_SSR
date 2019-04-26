import axios from 'axios';
import DataLoader from 'dataloader';
import { apiUrl } from '../../config/apiConfig';

export const postsLoader = (_, __, context) => {
  const loaderPosts = async (keys) =>
    await Promise.all(keys.map(() =>
      axios.get(apiUrl)
        .then((res) => res.data.posts)
        .catch((e) => throw Error(e.response.statusText))));


  let loader = context.loaderPosts;
  if (!loader) {
    context.loaderPosts = loader = new DataLoader((key) => loaderPosts(key))
  }
  return loader.load([])
}