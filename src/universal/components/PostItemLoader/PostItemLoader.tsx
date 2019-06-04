import * as React from 'react';
// import { useEffect, useState } from 'react';
import loadable from '@loadable/component';
// import ClearPost from '../share.components/ClearPost/ClearPost';

const PostItem = loadable(() => import(/* webpackPreload: true */'../PostItem/PostItem'));

const PostItemLoader: React.FunctionComponent<any> = (props: any) => {  // tslint:disable-line

  // const [page, setPage] = useState(null);
  // useEffect(() => {
  //   if (!page) {
  //     setPage(<PostItem postData={props.postData} lang={props.lang}  />);
  //   }
  // });
  // return (page ? page : null );
  return <PostItem postData={props.postData} lang={props.lang}/>;
};

export default React.memo(PostItemLoader);