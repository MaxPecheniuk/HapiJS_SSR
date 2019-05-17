import React from 'react';
import { Query } from 'react-apollo';
import { GET_POSTS } from '../../queries/posts.query';
import  PostItem  from '../PostItem/PostItem';
import { CommentTypes } from '../PostComments/PostComments';

import './PostsList.scss';

export interface PostTypes  {
  id: string;
  title: string;
  description: string;
  date: Date;
  comments: Array<CommentTypes>;
}

interface PostsListProps {
  searchValue: string;
  location: string;
}
interface IPostListResponse {
  data: any;
  posts: any;
  loading: any;
  error: any;
}

const PostsList = (props: PostsListProps) => {
  let variables;
  // if (props.location.search !== '') {
  //   variables = {'title': decodeURIComponent(props.location.search.replace('?search=', '')).toLowerCase()};
  // }
  return (
    <div className="posts-list">
      <Query<IPostListResponse> query={GET_POSTS} variables={variables} >
        {({data, loading,  error}) => {
          if (loading) { return null; }
          if (error) { return <div>Error</div>; }
          return (
            /* tslint:disable-next-line */
            data.posts.map((post: PostTypes, i: string) =>

                <PostItem postId={post.id} key={i}/>

            )
          )
        }}
      </Query>
    </div>
  )
}

export default PostsList;