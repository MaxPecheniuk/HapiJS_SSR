import React, { Fragment } from 'react';
import { Query } from "react-apollo";
import { GET_LIST } from '../../queries/listQuery';

const List = () => {
  return (
    <Fragment>

      <Query query={GET_LIST}>
        {({data, loading, error}) => {
          if (loading) return <div>Loading</div>;
          if(error) return <div>Error</div>;
          console.log(data.list);
          return (
            data.list.map((item, i) => {
              return (<div key={i}>{item.title} </div>)
            })
          )
        }}
      </Query>
    </Fragment>
  )
}

export default List