import * as React from 'react';
import * as queryString from 'querystring';
import { match, withRouter } from 'react-router';
import { History, Location } from 'history';

interface ILanguageToggleProps {
  match: match;
  location: Location;
  history: History;
}

const LanguageToggle: React.FunctionComponent<ILanguageToggleProps> = (props: ILanguageToggleProps) => {
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
    <div className="header__dropdown">
      <button className="header__dropdown__btn">{parsed.lang}</button>
      <div className="header__dropdown__content">
        <span onClick={() => changeLang('en')}>ENG</span>
        <span onClick={() => changeLang('ru')}>RUS</span>
      </div>

    </div>
  );
};

export default withRouter(LanguageToggle);