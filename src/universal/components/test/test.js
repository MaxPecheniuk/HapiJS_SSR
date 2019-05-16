import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { GET_POSTS } from '../../queries/posts.query';
import PostItem from '../PostItem/PostItem';
import type { PostTypes } from '../PostsList/PostsList';

export class MaxComp extends React.Component {

  render() {
    console.log(this.props);
    let variables;
    // if (this.props.location.search !== '') {
    //   variables = {'title': decodeURIComponent(this.props.location.search.replace('?search=', '')).toLowerCase()}
    // }
    return (
      <Query query={GET_POSTS} variables={this.variables} >
        {({data, loading,  error}) => {
          if (loading) return null;
          if (error) return <div>Error</div>;
          return (
            data.posts.map((post: PostTypes, i) =>

              <PostItem postId={post.id} key={i}/>

            )
          )
        }}
      </Query>
    )
  }
}