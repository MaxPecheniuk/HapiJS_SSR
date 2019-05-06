import React from 'react';
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