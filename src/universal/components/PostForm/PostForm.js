import React, {Component} from 'react';
import { Mutation } from 'react-apollo';
import { CREATE_POST, GET_LIST } from '../../queries/listQuery';

export class PostForm extends Component {
  state = {
    inputValue: '',
  }


  onSubmit = (e) => {
    e.preventDefault();

  }

  onHandleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({[name]: value});

  }
  render() {
    return (
      <Mutation mutation={CREATE_POST} variables={this.state.inputValue} update={(cache, {data: data}) => {
        const {post} =cache.readQuery({
          query: GET_LIST,
          data: {...post, post: data}
        })
      }}>
        { data => (
          <form onSubmit={this.onSubmit}>
            <input type="text" placeholder="Enter title" value={this.state.inputValue} onChange={this.onHandleChange}/>
          </form>        )}

      </Mutation>
    );

  }
}
