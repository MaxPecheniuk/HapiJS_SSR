import axios from 'axios';
import DataLoader from 'dataloader';
import { apiUrl } from '../../config/apiConfig';

export const postsLoader = (_, __, context) => {
  // debugger;
  const loaderPosts = async (keys) =>
    await Promise.all(keys.map(() =>
      axios.get(apiUrl)
        .then((res) => res.data.posts)));

  let loader = context.loaderPosts;
  if (!loader) {
    context.loaderPosts = loader = new DataLoader((key) => loaderPosts(key))
  }
  return loader.load([])
}