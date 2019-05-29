import * as React from 'react';
import { Link, match, withRouter } from 'react-router-dom';
import './PostInfo.scss';
import * as queryString from 'querystring';
import { PostItemType } from '../PostItem/PostItem';
import { History, Location } from 'history';
import { FormattedDate } from 'react-intl';

interface PostInfoProps {
  postInfo: PostItemType;
  location: Location;
  history: History;
  lang: string | any;
  match: match;
}

const PostInfo: React.FunctionComponent<PostInfoProps> = (props: PostInfoProps) => {
  const {postInfo, lang} = props;
  const parsed = queryString.parse(props.location.search.replace('?', ''));
  return (
    <div className="post-item__info">
      <span className="post-item__info__title">{postInfo.title[lang]}</span>
      <span className="post-item__info__date">
          <Link to={{pathname: `/post/${postInfo.id}/`, search: queryString.stringify(parsed)}}>
            <FormattedDate
              value={new Date(postInfo.date * 1000)}
              year="numeric"
              month="long"
              day="2-digit"
            />
          </Link>
        </span>
      <span className="post-item__info__description">{postInfo.description[lang]}</span>
    </div>
  );
};

export default withRouter(PostInfo);