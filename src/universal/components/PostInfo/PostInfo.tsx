import * as React from 'react';
import { Link } from 'react-router-dom';
import './PostInfo.scss';
import { PostItemType } from '../PostItem/PostItem';
import { connect } from 'react-redux';

interface PostInfoProps {
  postInfo: PostItemType;
  language: string;
}
const mapStateToProps = state => {
  return {
    language: state.localesReducer.language
  };
};
const PostInfo: React.FunctionComponent<PostInfoProps> = (props: PostInfoProps) => {
  const {postInfo, language} = props;
  return (
    <div className="post-item__info">
      <span className="post-item__info__title">{postInfo.title[language]}</span>
      <span className="post-item__info__date">
          <Link to={'/post/' + postInfo.id}>
            {new Date(postInfo.date * 1000).toLocaleDateString()}
          </Link>
        </span>
      <span className="post-item__info__description">{postInfo.description[language]}</span>
    </div>
  );
};

export default connect(mapStateToProps)(PostInfo);