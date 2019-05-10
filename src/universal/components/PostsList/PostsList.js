import React from 'react';
import { Query } from 'react-apollo';
import { GET_POSTS } from '../../queries/posts.query';
import { PostItem } from '../PostItem/PostItem';
import type { CommentTypes } from '../PostComments/PostComments';

import './PostsList.scss';

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
  let variables;
  if (props.location.search !== '') {
    variables = {'title': decodeURIComponent(props.location.search.replace('?search=', '')).toLowerCase()}
  }
  return (
      <div className="posts-list">
        <Query query={GET_POSTS} variables={variables} ssr={false}>
          {({data, loading,  error}) => {
            if (loading) return null;
            if (error) return <div>Error</div>;
            if (data.posts.length < 1) return <div>Length</div>
            return (
              data.posts.map((post: PostTypes, i) => {
                return (
                  <PostItem postId={post.id} key={i}/>
                )
              })
            )
          }}
        </Query>
      </div>
  )
}

export default PostsList;

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