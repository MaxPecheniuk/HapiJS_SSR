import * as React from 'react';
import {Fragment, SyntheticEvent } from 'react';
import { InputText } from '../share.components/inputText/InputText';
import { Redirect, RouteComponentProps, withRouter } from 'react-router';

import './searchForm.scss';

interface ISearchFormState  {
  inputValue: string;
  redirect: boolean;
}
interface IProps  {
  history?: any;
  location?: any;
}

class SearchForm extends React.Component<IProps & RouteComponentProps<{}>, ISearchFormState> {
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

  onChange = (event: SyntheticEvent<HTMLInputElement>) => {
    this.setState({
      inputValue: event.currentTarget.value
    })
  }

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
      return <Redirect to={{pathname: "/list", search: `?search=${inputValue}`}}/>
    }
    return (
      <Fragment>
        <form onSubmit={this.onSubmit} className="search-form">
          ddd
          <InputText
            value={inputValue}
            placeholder="Search title"
            onChange={this.onChange}
            name="inputValue"
            className="search-form__input-field"
          />
          <button
            // onSubmit={this.onSubmit}
            type='submit'
            className="search-form__submit-btn"
          >Submit</button>
        </form>
      </Fragment>
    )
  }
}


export default withRouter(SearchForm)