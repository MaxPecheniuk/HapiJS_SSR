//@flow
import React from 'react';
import './postInfo.scss'
import type {PostTypes} from '../../types/post.types';


type PostInfoProps = {
  postInfo: PostTypes
}
export class PostInfo extends React.Component<PostInfoProps> {
  render() {
    const {postInfo} = this.props;
    return (
      <div className="post-item__info">
        <span className="post-item__info__title">{postInfo.title}</span>
        <span className="post-item__info__date">{new Date(postInfo.date * 1000).toLocaleDateString()}</span>
        <span className="post-item__info__description">{postInfo.description}</span>
      </div>
    );
  }
}
