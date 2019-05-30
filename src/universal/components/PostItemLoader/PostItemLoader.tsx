import * as React from 'react';
import { useEffect, useState } from 'react';
import loadable from '@loadable/component';
import ClearPost from '../share.components/ClearPost/ClearPost';

const PostItem = loadable(() => import('../PostItem/PostItem'));

const PostItemLoader: React.FunctionComponent = () => {
  const [page, setPage] = useState(null);
  useEffect(() => {
    if (!page) {
      setPage(<PostItem/>);
    }
  });
  return (page ? page : <ClearPost/> );
};

export default React.memo(PostItemLoader);