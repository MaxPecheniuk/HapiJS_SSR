import * as React from 'react';
import * as queryString from 'querystring';
import {  withRouter } from 'react-router';
// import { History, Location } from 'history';
//
import './LanguageToggle.scss';
import { connect } from 'react-redux';
import { languageActionCreators } from './actionCreators/LanguageToggle.actionCreators';

// interface ILanguageToggleProps {
//   match: match;
//   location: Location;
//   history: History;
// }

const LanguageToggle: React.FunctionComponent<any> = (props: any) => {
  console.log(props);
  let parsed = queryString.parse(props.location.search.replace('?', ''));
  // usememo -->>
  console.log(props);
  const changeLang = (language) => () => {
    props.changeLangR({language: language, history: props.history, parsed: parsed});
  };
  // const changeLang = (language) => () => {
  //   if (Object.keys(parsed).length > 0) {
  //     parsed['lang'] = language;
  //   } else {
  //     parsed.lang = language;
  //   }
  //   const stringified = queryString.stringify(parsed);
  //   props.history.push({search: stringified});
  //   window.location.reload();
  // };
  return (
    <div className="header__dropdown">
      <button className="header__dropdown__btn">{parsed.lang}</button>
      <div className="header__dropdown__content">
        <span
          className="header__dropdown__content_en"
          onClick={changeLang('en')}
        >
          ENG
        </span>
        <span className="header__dropdown__content_ru" onClick={changeLang('ru')}>RUS</span>
      </div>

    </div>
  );
};

const mapStateToProps = (state) => {
  return {languagee: state.languageReducer.language};
};
const mapDispatchToProps = dispatch => {
  return {
    changeLangR: lang => dispatch(languageActionCreators(lang))};
};

export default withRouter(connect<any, any, any>(mapStateToProps, mapDispatchToProps)(LanguageToggle));