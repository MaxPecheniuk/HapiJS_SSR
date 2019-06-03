import * as React from 'react';
import { Link, match, withRouter } from 'react-router-dom';
import * as queryString from 'querystring';
import { IPostItemType } from '../PostItem/PostItem';
import { History, Location } from 'history';
import { FormattedDate } from 'react-intl';

import './PostInfo.scss';

interface IPostInfoProps {
  location: Location;
  history: History;
  match: match;
  postInfo: IPostItemType;
  lang: string | any;// tslint:disable-line
}

const PostInfo: React.FunctionComponent<IPostInfoProps> = (props: IPostInfoProps) => {
  const parsed = queryString.parse(props.location.search.replace('?', ''));
  const {postInfo, lang} = props;
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