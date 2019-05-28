import * as React from 'react';
import './Header.scss';
import SearchForm from '../SearchForm/SearchForm';
import { match, withRouter } from 'react-router';
import * as queryString from 'querystring';
import { History, Location } from 'history';

interface IHeaderProps {
  match: match;
  location: Location;
  history: History;
}

const Header: React.FunctionComponent<IHeaderProps> = (props: IHeaderProps) => {
  let parsed = queryString.parse(props.location.search.replace('?', ''));
  const changeLang = (language) => {
    if (Object.keys(parsed).length > 0) {
      parsed['lang'] = language;
    } else {
      parsed.lang = language;
    }
    const stringified = queryString.stringify(parsed);
    props.history.push({search: stringified});
   window.location.reload();
  };
  return (
    <div className="header">
      <SearchForm/>
      <div className="header__dropdown">
        <button className="header__dropdown__btn">{parsed.lang}</button>
        <div className="header__dropdown__content">
          <span onClick={() => changeLang('en')}>ENG</span>
          <span onClick={() => changeLang('ru')}>RUS</span>
        </div>

      </div>

    </div>
  );
};

export default withRouter(React.memo(Header));