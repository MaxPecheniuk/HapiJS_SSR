import React, { Fragment } from 'react';
import { Mutation, Query, withApollo } from 'react-apollo';
import { DELETE_USER, GET_LIST, GET_USERS } from '../../queries/usersQuery';
import './List.scss'
class List extends React.Component{


  render() {
    console.log(this.props)
    return (
      <Fragment>
        <Query query={GET_USERS}>
          {({data, loading, error}) => {
            if (loading) return <div>Loading</div>;
            if(error) return <div>Error</div>;
            return (
              data.users.map((item, i) => {
                return (
                  <div className="users_list" key={i}>
                    <div >{item.username}</div>
                    <Mutation mutation={DELETE_USER} variables={{id: item.id}}>
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

export default List




