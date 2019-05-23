import axios from 'axios';
import DataLoader from 'dataloader';
import { apiUrl } from '../../config/apiConfig';
import { language } from '../../../universal/locales/langConfig';

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
  console.log(title);
  console.log(language);
  console.log(posts.map(item => item.title[language].toLowerCase().includes(title)));
  return posts.filter(item => item.title[language].toLowerCase().includes(title))
};
