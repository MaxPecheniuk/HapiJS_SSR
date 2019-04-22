import React, { Fragment } from 'react';
import {Query } from 'react-apollo';
import { GET_POSTS } from '../../queries/usersQuery';

import './posts.scss';

class Posts extends React.Component {

  render() {
    return (
      <Fragment>
        <Query query={GET_POSTS}>
          {({data, loading, error}) => {
            if (loading) return <div>Loading</div>;
            if (error) return <div>Error</div>;
            return (
              data.posts.map((post, i) => {
                return (
                  <div className="post" key={i}>
                    <div>{post.title}</div>
                    <div>{post.description}</div>
                    <div className="comments">
                      {
                        post.comments.map((comment, index) => {
                          return (
                            <div key={index} >

                            <div className="comment">{comment.text}</div>
                              <div className="comment-author">{comment.author.name}</div>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                )
              })
            )
          }}
        </Query>
      </Fragment>
    )
  }


}

export default Posts;




