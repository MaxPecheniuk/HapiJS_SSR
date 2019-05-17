import * as React from 'react';
import './Header.scss';
import SearchForm from '../SearchForm/SearchForm';

export class Header extends React.PureComponent {
  render() {
    return (
      <div className="header">
        <SearchForm/>
      </div>
    )
  }
}

// 1 react memo
// 2 typescript
// 3 memo где ключи идут об
// 4 react hooks
// 5 react intl