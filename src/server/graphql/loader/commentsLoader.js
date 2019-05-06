import axios from 'axios';
import DataLoader from 'dataloader';
import { apiUrl } from '../../config/apiConfig';

export const commentsLoader = (posts, __, context) => {
  const loaderComment = async (keys) => await Promise.all(keys.map((key) =>
    axios.get(apiUrl)
      .then(res => res.data.comments)
      .then(comments => comments.filter(comment => key.includes(comment.id)))
      .catch((e) => throw Error(e.response.statusText))));

  let loader = context.loaderComment;
  if (!loader) {
    context.loaderComment = loader = new DataLoader((key) => loaderComment(key))
  }
  return loader.load(posts.commentsIds)
}