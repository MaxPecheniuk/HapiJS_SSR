import * as React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import LanguageToggle from '../LanguageToggle/LanguageToggle';

import './Header.scss';

const Header: React.FunctionComponent = () => {
  return (
    <header className="header">
      <SearchForm/>
      <LanguageToggle/>
    </header>
  );
};

export default React.memo(Header);