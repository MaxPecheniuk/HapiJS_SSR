import React, { Fragment } from 'react';
import { Query, withApollo } from 'react-apollo';
import { GET_USER, GET_USERS } from '../../queries/usersQuery';

class UserForm extends React.Component {
  state = {
    username: ''
  }

  componentDidMount() {
    const id = Number(this.props.match.params.id);
    let userData = this.props.client.readQuery({query: GET_USERS});
    userData = userData.users.find(user => user.id === id);
    this.setState({
      username: userData.username,
      fullname:userData.fullname,
      email: userData.email,
      role: userData.role,
      phone: userData.phone
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
  }

  onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value});
  }


  render() {

    return (
      <Fragment>
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder='username' value={this.state.username} onChange={this.onHandleChange} name='username'/>
          <input type="text" placeholder='fullname' value={this.state.fullname} onChange={this.onHandleChange} name='fullname'/>
          <input type="text" placeholder='email' value={this.state.email} onChange={this.onHandleChange} name='email'/>
          <input type="text" placeholder='phone' value={this.state.phone} onChange={this.onHandleChange} name='phone'/>
        </form>
        <button onSubmit={this.onSubmit}>Submit</button>

      </Fragment>)
  }


}

export default withApollo(UserForm)




