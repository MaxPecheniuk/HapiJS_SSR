import axios from 'axios';
import DataLoader from 'dataloader';
import { apiUrl } from '../../config/apiConfig';

export const authorsLoader = (root, __, context) => {
  const loaderAuthor = async (keys) => await Promise.all(keys.map((key) =>
      axios.get(apiUrl)
        .then((res) => res.data.authors)
        .then(authors => authors.find(author => author.id === key.id))
        .catch((e) => throw Error(e.response.statusText))));

  let loader = context.loaderAuthor;
  if (!loader) {
    context.loaderAuthor = loader = new DataLoader((key) => loaderAuthor(key))
  }
  return loader.load(root.author)

}
