import * as React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import LanguageToggle from '../LanguageToggle/LanguageToggle';

import './Header.scss';

const Header: React.FunctionComponent = () => {
  return (
    <div className="header">
      <SearchForm/>
      <LanguageToggle/>
    </div>
  );
};

export default React.memo(Header);