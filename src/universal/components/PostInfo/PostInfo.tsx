import * as React from 'react';
import { Link } from 'react-router-dom';
import './PostInfo.scss';
import { PostItemType } from '../PostItem/PostItem';
import { language } from '../../locales/langConfig';

interface PostInfoProps {
  postInfo: PostItemType;
}

const PostInfo: React.FunctionComponent<PostInfoProps> = (props: PostInfoProps) => {
  const {postInfo} = props;
  return (
    <div className="post-item__info">
      <span className="post-item__info__title">{postInfo.title[language]}</span>
      <span className="post-item__info__date">
          <Link to={'/post/' + postInfo.id}>
            {/*{new Date(postInfo.date * 1000).toLocaleDateString()}*/}
          </Link>
        </span>
      <span className="post-item__info__description">{postInfo.description[language]}</span>
    </div>
  );
};

export default PostInfo;