//@flow
import * as React from 'react';
import { InputText } from '../share.components/inputText/inputText';

type SearchFormState = {
  inputValue: string
}

export class SearchForm extends React.Component<{}, SearchFormState> {
  state = {
    inputValue: ''
  }

  onChange =(event: SyntheticEvent<HTMLInputElement>) => {
    this.setState({
      inputValue: event.currentTarget.value
    })
  }

  onSubmit =(event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <InputText
          value={this.state.inputValue}
          placeholder="Search"
          onChange={this.onChange}
          name='inputValue'
        />
        {/*<button onSubmit={this.onSubmit}>submit</button>*/}
      </form>
    )
  }
}