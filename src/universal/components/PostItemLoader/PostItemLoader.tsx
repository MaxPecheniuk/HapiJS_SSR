import * as React from 'react';
import { useEffect, useState } from 'react';
import loadable from '@loadable/component';
import ClearPost from '../share.components/ClearPost/ClearPost';

const PostItem = loadable(() => import(/* webpackPreload: true */'../PostItem/PostItem'));

const PostItemLoader: React.FunctionComponent<any> = (props: any) => {
  console.log(props);
  const [page, setPage] = useState(null);
  useEffect(() => {
    if (!page) {
      setPage(<PostItem postId={props.postId} />);
    }
  });
  return (page ? page : <ClearPost/> );
};

export default React.memo(PostItemLoader);