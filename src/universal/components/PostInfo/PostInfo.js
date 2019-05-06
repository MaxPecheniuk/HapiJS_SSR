//@flow
import React from 'react';
import { Link } from 'react-router-dom';
import type { PostTypes } from '../PostsList/PostsList';

import './PostInfo.scss'


type PostInfoProps = {
  postInfo: PostTypes
}
type State = {
  showComments: boolean
}

export class PostInfo extends React.Component<PostInfoProps, State> {
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
