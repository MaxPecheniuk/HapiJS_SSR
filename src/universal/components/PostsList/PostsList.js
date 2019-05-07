import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import { GET_POSTS } from '../../queries/posts.query';
import { PostItem } from '../PostItem/PostItem';
import type { CommentTypes } from '../PostComments/PostComments';

import SearchForm from '../SearchForm/SearchForm';
import './PostsList.scss';
import { connect } from 'react-redux';
import { SEARCH_POSTS } from '../../queries/searchPosts';

export type PostTypes = {
  id: string,
  title: string,
  description: string,
  date: Date,
  comments: Array<CommentTypes>
}

type postsListProps = {
  searchValue: string
}

const PostsList: React.SFC<postsListProps> = (props: postsListProps) => {
  let query = GET_POSTS;
  let variables;
  console.log(props.location.search);
  let  a = props.location.search;
  decodeURIComponent(props.location.search);
  console.log(a);
  a.replace(/(^|\s+)?(\s+|$)/g, ' ')
  console.log(a);

  if (props.searchValue !== '') {
    // props.history.push
    query = SEARCH_POSTS;
    variables = {'title': props.location.search.toLowerCase()}
  }
  return (
    <Fragment>
      <div className="posts-list">
        <Query query={query} variables={variables} ssr={false}>
          {({data, loading, error}) => {
            if (loading) return <div>Loading</div>;
            if (error) return <div>Error</div>;
            if (query === SEARCH_POSTS) {
              return (
                data.searchPosts.map((post: PostTypes, i) => {
                return (
                  <PostItem postId={post.id} key={i}/>
                )
              }))
            } else {
              return (
              data.posts.map((post: PostTypes, i) => {
                return (
                  <PostItem postId={post.id} key={i}/>
                )
              })
            )}
          }}
        </Query>
      </div>
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  return {searchValue: state.searchFormReducer.searchValue}
}

export default connect(mapStateToProps)(PostsList);

//
//
//
// <div>
//   props.data
// </div>
//
//
// function sq(Component) {
// }
//
// function lq()