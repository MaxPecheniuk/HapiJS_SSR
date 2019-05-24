import * as React from 'react';
import './Header.scss';
import SearchForm from '../SearchForm/SearchForm';
import { withRouter } from 'react-router';
import * as queryString from 'querystring';
// import { connect } from 'react-redux';
// import { localesActionCreators } from '../../locales/actionCreactors/locales.actionCreators';
// import { CHANGE_LANGUAGE } from '../../constants/constants';
//
// const mapDispatchToProps = dispatch => {
//   return {
//     changeLang: lang => dispatch({type: CHANGE_LANGUAGE, payload: lang})};
// };

const Header: React.FunctionComponent = (props: any) => {
  let a = queryString.parse(props.location.search);
  console.log(Object.keys(a).length);
  if (a) {
    console.log('true');
  }

  const changeLang = (language) => {
    let parsed = queryString.parse(props.location.search);

    if (Object.keys(parsed).length > 0) {
      console.log(parsed);
      console.log('true');
      return parsed = {lang: language};
    } else {parsed.lang = language; }

    const stringified = queryString.stringify(parsed);
    props.history.push({search: stringified});
  };
  return (
    <div className="header">
      <SearchForm/>
      <div>
        <span onClick={() => changeLang('en')}>ENG</span>///
        <span onClick={() => changeLang( 'ru')}>RUS</span>
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