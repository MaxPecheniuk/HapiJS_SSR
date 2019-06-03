import * as React from 'react';
import * as queryString from 'querystring';
import { match, withRouter } from 'react-router';
// import { History, Location } from 'history';
//
import './LanguageToggle.scss';
import { connect } from 'react-redux';
import { changeLanguageActionCreators } from './actionCreators/LanguageToggle.actionCreators';

interface ILanguageToggleProps {
  match: match;
  location: Location;
  history: History;
  changeLang: (lang: any) => void;
}

const LanguageToggle: React.FunctionComponent<ILanguageToggleProps> = (props: ILanguageToggleProps) => {
  let parsed = queryString.parse(props.location.search.replace('?', ''));
  const changeLang = (language) => () => {
    props.changeLang({language: language, parsed: parsed});
  };
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
  return {language: state.languageReducer.language};
};
const mapDispatchToProps = dispatch => {
  return {
    changeLang: lang => dispatch(changeLanguageActionCreators(lang))
  };
};

export default withRouter(connect<any, any, any>(mapStateToProps, mapDispatchToProps)(LanguageToggle));