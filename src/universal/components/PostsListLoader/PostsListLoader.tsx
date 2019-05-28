import * as React from 'react';
import { useEffect, useState } from 'react';
import loadable from '@loadable/component';

const PostsList = loadable(() => import('../PostsList/PostsList'));

const PostsListsLoader: React.FunctionComponent = () => {
  const [page, setPage] = useState(null);
  useEffect(() => {
    if (!page) {
      setPage(<PostsList/>);
    }
  });
  return (page ? page : null );
};

export default PostsListsLoader;