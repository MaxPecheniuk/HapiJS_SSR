//@flow
import React, {Fragment} from 'react';
import { InputText } from '../share.components/inputText/inputText';
import { searchFormActionCreators } from './actionCreators/searchForm.actionCreators';
import { connect } from 'react-redux';

import './searchForm.scss';
import { withRouter } from 'react-router';

type SearchFormState = {
  inputValue: string
}
type Props = {
  dispatch: any
}

class SearchForm extends React.Component<Props, SearchFormState> {
  state = {
    inputValue: '',
    redirect: false
  }

  onChange = (event: SyntheticEvent<HTMLInputElement>) => {
    this.setState({
      inputValue: event.currentTarget.value
    })
  }

  onSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.history.push({search: this.state.inputValue});
    this.props.dispatch(searchFormActionCreators(this.state.inputValue))


  }

  render() {
    // console.log(this.state.redirect);
    // if (this.state.redirect){
    console.log(this.props);
    //   return  <Redirect to={"/home"} />
    // }
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


export default withRouter(connect()(SearchForm))