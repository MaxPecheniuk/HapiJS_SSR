//@flow
import React, {Fragment} from 'react';
import { InputText } from '../share.components/inputText/InputText';
import { Redirect, withRouter } from 'react-router';

import './searchForm.scss';

type SearchFormState = {
  inputValue: string
}
type Props = {
  history: any,
  location: any
}

class SearchForm extends React.Component<Props, SearchFormState> {
  state = {
    inputValue: '',
    redirect: false
  }

  componentDidMount(){
    this.setState({
      inputValue: decodeURIComponent(this.props.location.search.replace('?search=', ''))
    })
  }

  componentDidUpdate() {
    if (this.props.location.pathname === '/' && this.state.redirect){
      this.setState({
        redirect: false
      })
    }
  }

// eslint-disable-next-line
  onChange = (event: SyntheticEvent<HTMLInputElement>) => {
    this.setState({
      inputValue: event.currentTarget.value
    })
  }

  // eslint-disable-next-line
  onSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (this.props.location.pathname !== '/'){
      this.setState({
        redirect: true
      })
    }
    this.props.history.push({search: `?search=${this.state.inputValue}`});
  }

  render() {
    const {redirect , inputValue} = this.state;
    if (redirect) {
      return <Redirect to={{pathname: "/", search: `?search=${inputValue}`}}/>
    }
    return (
      <Fragment>
        <form onSubmit={this.onSubmit} className="search-form">
          <InputText
            value={inputValue}
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