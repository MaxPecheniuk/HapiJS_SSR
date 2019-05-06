import axios from 'axios';
import DataLoader from 'dataloader';
import { apiUrl } from '../../config/apiConfig';

export const searchPostsLoader = (_, {title}, context) => {
  const searchPostsLoader = async (keys) =>
    await Promise.all(keys.map(() =>
      axios.get(apiUrl)
        .then(res => res.data.posts)
        .then(post => post.filter(item => item.title.toLowerCase().includes(title)))
        .catch((e) => throw Error(e.response.statusText))));


  let loader = context.searchPostsLoader;
  if (!loader) {
    context.searchPostsLoader = loader = new DataLoader((key) => searchPostsLoader(key))
  }
  return loader.load([])
}

