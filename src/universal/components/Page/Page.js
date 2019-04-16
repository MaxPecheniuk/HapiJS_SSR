import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Query } from "react-apollo";
import { GET_LIST } from '../../queries/listQuery';



const Page = () => {
  return (
    <Query query={GET_LIST}>
      {( {loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        console.log(data.list[0].title);

        return (
          <div>
            {data.list.map((item, index) => (
              <div key={index}>{item.title}</div>
            ))}
          </div>
        )
      }}
    </Query>
  )
}


export default Page