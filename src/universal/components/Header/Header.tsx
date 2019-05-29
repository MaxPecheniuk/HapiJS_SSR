import * as React from 'react';
import './Header.scss';
import SearchForm from '../SearchForm/SearchForm';
import LanguageToggle from '../LanguageToggle/LanguageToggle';

const Header: React.FunctionComponent = () => {
  return (
    <div className="header">
      <SearchForm/>
      <LanguageToggle/>
    </div>
  );
};

export default React.memo(Header);