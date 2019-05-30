import * as React from 'react';
import { useEffect, useState } from 'react';
import { match, withRouter } from 'react-router';
import loadable from '@loadable/component';
import { FormattedMessage } from 'react-intl';
import * as queryString from 'querystring';
import { Query } from 'react-apollo';
import { GET_POST_EN, GET_POST_RU } from '../../queries/postItem.query';
import ClearPost from '../share.components/ClearPost/ClearPost';
import { History, Location } from 'history';

const PostInfo = loadable(() => import('../PostInfo/PostInfo'));
const PostComments = loadable(() => import('../PostComments/PostComments'));

import './PostItem.scss';

interface IPostItemProps {
  history: History;
  match: match<{id: string}>;
  location: Location;
  postId?: string;
}
interface IPostItemResponse {
  postById: IPostItemType;
}

export interface IPostItemType {
  commentsIds: Array<string>;
  date: number;
  description: string;
  id: string;
  title: string;
}

const PostItem: React.FunctionComponent<IPostItemProps> = (props: IPostItemProps) => {
  const [showComments, commentToggle] = useState<boolean>(false);
  const onCommentToggle = () => {
    commentToggle(!showComments);
  };

  const {match, postId, location, history} = props;
  const parsed = queryString.parse(location.search.replace('?', ''));

  useEffect(() => {
    if (match.params.id !== undefined && parsed.title) {
      delete parsed.title;
      const stringified = queryString.stringify(parsed);
      history.push({search: stringified});
    }
    if (!parsed.lang) {
      parsed.lang = 'en';
      const stringified = queryString.stringify(parsed);
      props.history.push({search: stringified});
    }
  });

  let id: string;
  if (match.params.id === undefined) {
    id = postId;
  } else {
    id = match.params.id;
  }

  return (
    <Query<IPostItemResponse> query={parsed.lang === 'en' ? GET_POST_EN : GET_POST_RU} variables={{'id': id}}>
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
                  {showComments ? <FormattedMessage id="postItem.showComments"/> :
                    data.postById.commentsIds.length}
                    {!showComments ? <FormattedMessage id="postItem.comments" /> : null}

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