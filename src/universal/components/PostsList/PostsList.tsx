import * as React from 'react';
import { match, withRouter } from 'react-router';
import { Query } from 'react-apollo';
import { GET_POSTS } from '../../queries/posts.query';
import * as queryString from 'querystring';
import { useEffect } from 'react';
import loadable from '@loadable/component';
const ClearPost = loadable(() => import('../share.components/ClearPost/ClearPost'));
const PostItem = loadable(() => import('../PostItem/PostItem'));
import { Location, History } from 'history';

interface IPostsListProps {
  location?: Location;
  history: History;
  match: match;
}

interface IPostListResponse {
  posts: Array<IPostsId>;
  loading: boolean;
  error: boolean;
}

interface IPostsId {
  id: string;
}

const PostsList: React.FunctionComponent<IPostsListProps> = (props: IPostsListProps) => {
  const parsed = queryString.parse(props.location.search.replace('?', ''));

  useEffect(() => {
    if (!parsed.lang) {
      parsed.lang = 'en';
      const stringified = queryString.stringify(parsed);
      props.history.push({search: stringified});
    }
  });

  const {lang, title} = parsed;
    return (
      <div className="posts-list">
        <Query<IPostListResponse>
          query={GET_POSTS}
          variables={{title, lang}}
        >
          {({data, loading, error}) => {
            if (loading) {return <ClearPost/>; }
            if (error) {return <div>Error</div>; }
            return (
              data.posts.map((post: IPostsId, i: number) =>
                <PostItem postId={post.id} key={i}/>
              )
            );
          }}
        </Query>
      </div>
    );
};

export default withRouter(PostsList);