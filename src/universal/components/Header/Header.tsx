import * as React from 'react';
import './Header.scss';
import SearchForm from '../SearchForm/SearchForm';
const Header: React.FunctionComponent = () => {
    return (
      <div className="header">
        <SearchForm/>
        <div>
          <span>ENG</span>
          <span>RUS</span>
        </div>

      </div>
    );
};

export default React.memo(Header);

// 1 react memo
// 2 typescript
// 3 memo где ключи идут об
// 4 react hooks
// 5 react intl