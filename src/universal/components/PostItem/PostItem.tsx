import * as React from 'react';
import { useEffect, useState } from 'react';
import {  withRouter } from 'react-router';
import loadable from '@loadable/component';
import { FormattedMessage } from 'react-intl';
import * as queryString from 'querystring';
import { Query } from 'react-apollo';
import { GET_POST_EN, GET_POST_RU } from '../../queries/postItem.query';
import PostInfo from '../PostInfo/PostInfo';
import ClearPost from '../share.components/ClearPost/ClearPost';
import './PostItem.scss';

const PostComments = loadable(() => import('../PostComments/PostComments'));

// interface IPostItemProps {
//   match?: match<{ id: string }>;
//   location?: any;
//   postId: string;
//
// }
// interface IPostItemProps2 {
//   postId: string;
// }

interface PostItemResponse {
  postById: PostItemType;
}

export interface PostItemType {
  commentsIds: Array<string>;
  date: number;
  description: string;
  id: string;
  title: string;
}

const PostItem: React.FunctionComponent<any> = (props: any) => {
  const [showComments, commentToggle] = useState<boolean>(false);
  const onCommentToggle = () => {
    commentToggle(!showComments);
  };

  // tslint:disable-next-line
  const {match, postId} = props;
  const parsed = queryString.parse(props.location.search.replace('?', ''));

  useEffect(() => {
    if (match.params.id !== undefined && parsed.title) {
      delete parsed.title;
      const stringified = queryString.stringify(parsed);
      props.history.push({search: stringified});
    }
  });

  let id: string ;
  if (match.params.id === undefined) {
    id = postId;
  } else {
    id = match.params.id;
  }

  return (
    <Query<PostItemResponse> query={parsed.lang === 'en' ? GET_POST_EN : GET_POST_RU} variables={{'id': id}}>
      {({data, loading, error}) => {
        if (loading) {
          return <div><ClearPost/></div>;
        }
        if (error) {
          return <div>Error</div>;
        }
        return (
          <div className="post-item">
            <PostInfo postInfo={data.postById} lang={parsed.lang}/>
            <div className="post-item__comments-count">
                <span onClick={onCommentToggle}>
                  {showComments ? 'Hide' : data.postById.commentsIds.length}  <FormattedMessage id="postItem.comments"/>
                </span>
            </div>
            {showComments && <PostComments commentsIds={data.postById.commentsIds}/>}
          </div>
        );
      }}
    </Query>
  );

};
export default withRouter(PostItem);