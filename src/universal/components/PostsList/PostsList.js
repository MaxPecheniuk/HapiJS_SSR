import React from 'react';
import { Query } from 'react-apollo';
import { GET_POSTS } from '../../queries/posts.query';
import  PostItem  from '../PostItem/PostItem';
import type { CommentTypes } from '../PostComments/PostComments';
// const PostItem = loadable(()=> import('../PostItem/PostItem'));

import './PostsList.scss';
import loadable from '@loadable/component';
import { withRouter } from 'react-router';

export type PostTypes = {
  id: string,
  title: string,
  description: string,
  date: Date,
  comments: Array<CommentTypes>
}

type postsListProps = {
  searchValue: string,
  location: string
}

export  const PostsList = (props: postsListProps) => {
  let variables;
  if (props.location.search !== '') {
    variables = {'title': decodeURIComponent(props.location.search.replace('?search=', '')).toLowerCase()}
  }
  console.log('list');
  return (
    <div className="posts-list">
      <Query query={GET_POSTS} variables={variables} >
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
    </div>
  )
}

export default PostsList;