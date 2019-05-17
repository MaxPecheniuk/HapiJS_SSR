//@flow
import React from 'react';
import { Link } from 'react-router-dom';

import './PostInfo.scss'
// import { PostTypes } from '../PostsList/PostsList';


interface PostInfoProps  {
  postInfo: any;
}
type State = {
  showComments: boolean
}

class PostInfo extends React.Component<PostInfoProps, State> {
  render() {
    const {postInfo} = this.props;
    return (
      <div className="post-item__info">
        <span className="post-item__info__title">{postInfo.title}</span>
        <span className="post-item__info__date">
          <Link to={'/post/' + postInfo.id}>
            {new Date(postInfo.date * 1000).toLocaleDateString()}
          </Link>
        </span>
        <span className="post-item__info__description">{postInfo.description}</span>
      </div>
    );
  }
}
export default PostInfo;