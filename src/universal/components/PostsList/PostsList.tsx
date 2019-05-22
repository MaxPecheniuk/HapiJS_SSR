import * as React from 'react';
import { Query } from 'react-apollo';
import { GET_POSTS } from '../../queries/posts.query';
import PostItem from '../PostItem/PostItem';
// import { useEffect, useState } from 'react';

interface PostsListProps {
  location?: {search: string};
}

interface IPostListResponse {
  posts: Array<PostsId>;
  loading: boolean;
  error: boolean;
}

interface PostsId {
  id: string;
}

const PostsList: React.FunctionComponent<PostsListProps> = (props: PostsListProps) => {
    return (
      <div className="posts-list">
        <Query<IPostListResponse>
          query={GET_POSTS}
          variables={{'title':
              decodeURIComponent(props.location.search.replace('?search=', '')).toLowerCase()}}
        >
          {({data, loading, error}) => {
            if (loading) {return null; }
            if (error) {return <div>Error</div>; }
            return (
              data.posts.map((post: PostsId, i: number) =>
                <PostItem postId={post.id} key={i}/>
              )
            );
          }}
        </Query>
      </div>
    );
};

export default PostsList;