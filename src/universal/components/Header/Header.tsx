import * as React from 'react';
import './Header.scss';
import SearchForm from '../SearchForm/SearchForm';
import { withRouter } from 'react-router';
import * as queryString from 'querystring';

const Header: React.FunctionComponent = (props: any) => {
  let parsed = queryString.parse(props.location.search.replace('?', ''));
  const changeLang = (language) => {
    if (Object.keys(parsed).length > 0) {
      parsed['lang'] = language;
    } else {
      parsed.lang = language;
    }
    const stringified = queryString.stringify(parsed);
    props.history.push({search: stringified});
    props.history.go(0);
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
// 1 react memo
// 2 typescript
// 3 memo где ключи идут об
// 4 react hooks
// 5 react intl