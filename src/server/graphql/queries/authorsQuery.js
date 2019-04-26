import axios from 'axios';
import DataLoader from 'dataloader';
import { apiUrl } from '../../config/apiConfig';

export const authorsQuery = (_, __, context) => {
  const loaderAuthors = async (keys) =>
    await Promise.all(keys.map(() =>
      axios.get(apiUrl)
        .then((res) => res.data.authors)
        .catch((e) => throw Error(e.response.statusText))));

  let loader = context.loaderAuthors;
  if (!loader) {
    context.loaderAuthors = loader = new DataLoader((key) => loaderAuthors(key))
  }
  return loader.load([])
}