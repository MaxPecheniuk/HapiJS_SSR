import axios from 'axios';
import DataLoader from 'dataloader';
import { apiUrl } from '../../config/apiConfig';

export const commentsQuery = (_, ids, context) => {
  const loaderComments = async (keys) =>
    await Promise.all(keys.map((key) =>
      axios.get(apiUrl)
        .then((res) => res.data.comments)
        .then(comments => comments.find(item => item.id === key))

        .catch((e) => throw Error(e.response.statusText))));

  let loader = context.loaderComments;
  if (!loader) {
    context.loaderComments = loader = new DataLoader((key) => loaderComments(key))
  }
  return loader.loadMany(ids.id)
}