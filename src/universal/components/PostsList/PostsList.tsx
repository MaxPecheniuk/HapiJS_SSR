import * as React from 'react';
import { Query } from 'react-apollo';
import { GET_POSTS } from '../../queries/posts.query';
import PostItem from '../PostItem/PostItem';
import * as queryString from 'querystring';

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
  console.log(props);
  const parsed = queryString.parse(props.location.search);
  console.log(parsed.search);
    return (
      <div className="posts-list">
        <Query<IPostListResponse>
          query={GET_POSTS}
          variables={{'title': parsed.search }}
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