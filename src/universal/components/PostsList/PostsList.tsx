import * as React from 'react';
import { Query } from 'react-apollo';
import { GET_POSTS } from '../../queries/posts.query';
import PostItem from '../PostItem/PostItem';
import { useEffect, useState } from 'react';

// interface State {
//   variables: string;
// }

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

    const [variables, updateSearch] = useState<string>('');

    useEffect(() => {
      updateSearch(decodeURIComponent(props.location.search.replace('?search=', '')).toLowerCase());
    });

    return (
      <div className="posts-list">
        <Query<IPostListResponse> query={GET_POSTS} variables={{'title': variables}}>
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