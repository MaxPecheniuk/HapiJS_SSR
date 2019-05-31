import * as React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import LanguageToggle from '../LanguageToggle/LanguageToggle';

import './Header.scss';
import getHistory from '../../Hh';
// import { customHistory } from '../../index';

const Header: React.FunctionComponent = () => {
  // console.log(customHistory);
  return (
    <header className="header">
      <SearchForm/>
      <LanguageToggle/>
      <button onClick={() => getHistory().push('/33')}>l</button>
    </header>
  );
};

export default React.memo(Header);