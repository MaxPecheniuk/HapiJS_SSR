//@flow
import React, {Fragment} from 'react';
import { InputText } from '../share.components/inputText/inputText';
import { withRouter } from 'react-router';

import './searchForm.scss';

type SearchFormState = {
  inputValue: string
}
type Props = {
  dispatch: any
}

class SearchForm extends React.Component<Props, SearchFormState> {
  state = {
    inputValue: '',
  }

  componentDidMount(){
    this.setState({
      inputValue: decodeURIComponent(this.props.location.search.replace('?search=', ''))
    })
  }

  onChange = (event: SyntheticEvent<HTMLInputElement>) => {
    this.setState({
      inputValue: event.currentTarget.value
    })
  }

  onSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.history.push({search: `?search=${this.state.inputValue}`});
  }

  render() {
    return (
      <Fragment>
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
      </Fragment>
    )
  }
}


export default withRouter(SearchForm)