//@flow
import React from 'react';
import { InputText } from '../share.components/inputText/inputText';
import { searchFormActionCreators } from './actionCreators/searchForm.actionCreators';
import { connect } from 'react-redux';

import './searchForm.scss';

type SearchFormState = {
  inputValue: string
}
type Props = {
  dispatch: any
}

class SearchForm extends React.Component<Props, SearchFormState> {
  state = {
    inputValue: ''
  }

  onChange = (event: SyntheticEvent<HTMLInputElement>) => {
    this.setState({
      inputValue: event.currentTarget.value.toLowerCase()
    })
  }

  onSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.dispatch(searchFormActionCreators(this.state.inputValue))
    this.setState({
      inputValue: ''
    })
  }

  render() {
    return (
        <form onSubmit={this.onSubmit} className="search-form">
          <InputText
            value={this.state.inputValue}
            placeholder="Search title"
            onChange={this.onChange}
            name="inputValue"
            className="search-form__input-field"
          />
          <button
            onSubmit={this.onSubmit}
            className="search-form__submit-btn"
          >Submit</button>
        </form>
    )
  }
}


export default connect()(SearchForm)