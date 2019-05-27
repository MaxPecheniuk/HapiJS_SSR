import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './PostInfo.scss';
// import { PostItemType } from '../PostItem/PostItem';
// const queryString = require('query-string');
import * as queryString from 'querystring';

// interface PostInfoProps {
//   postInfo: PostItemType;
//   location: any;
//   history
//
// }

const PostInfo: React.FunctionComponent<any> = (props: any) => {
  const {postInfo, lang} = props;
  const parsed = queryString.parse(props.location.search.replace('?', ''));
  return (
    <div className="post-item__info">
      <span className="post-item__info__title">{postInfo.title[lang]}</span>
      <span className="post-item__info__date">
          <Link to={{pathname: `/post/${postInfo.id}/`, search: queryString.stringify(parsed)}}>
            {new Date(postInfo.date * 1000).toLocaleDateString()}
          </Link>
        </span>
      <span className="post-item__info__description">{postInfo.description[lang]}</span>
    </div>
  );
};

export default withRouter(PostInfo);