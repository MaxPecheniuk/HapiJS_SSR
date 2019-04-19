import React, { Fragment } from 'react';
import { Mutation, Query, withApollo } from 'react-apollo';
import { DELETE_USER, GET_LIST, GET_USERS } from '../../queries/usersQuery';
import { Link } from 'react-router-dom';

import './UserList.scss';

class UsersList extends React.Component{
  onHandleClick = () => {
    this.props.client.mutate()
  }
  render() {
    return (
      <Fragment>
        <Query query={GET_USERS}>
          {({data, loading, error}) => {
            if (loading) return <div>Loading</div>;
            if(error) return <div>Error</div>;
            console.log(data);
            return (
              data.users.map((item, i) => {
                return (
                  <div className="user" key={i}>

                    <Link to={`/user_form/${item.id}`}>
                      <span>{item.username}</span>
                    </Link>
                    <Mutation
                      mutation={DELETE_USER}
                      variables={{id: item.id}}

                    >
                      {deleteUser => (
                        <button onClick={deleteUser}>delete</button>
                      )}
                    </Mutation>
                  </div>
                )
              })
            )
          }}
        </Query>
      </Fragment>
    )}


}

export default withApollo(UsersList);




