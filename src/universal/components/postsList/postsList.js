import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import { GET_POSTS } from '../../queries/posts.query';
import { Link } from 'react-router-dom';
import type { PostTypes } from '../../types/post.types';

import './postsList.scss';
import { PostItem } from '../postItem/postItem';
// import { SearchForm } from '../serachForm/serachForm';

const PostsList: React.SFC<> = () => {
  return (
    <Fragment>
      {/*<SearchForm/>*/}
      <div className="posts-list">
        <Query query={GET_POSTS} ssr={false}>
          {({data, loading, error}) => {
            if (loading) return <div>Loading</div>;
            if (error) return <div>Error</div>;
            return (
              data.posts.map((post: PostTypes, i) => {
                return (
                  <Link to={'/post/' + post.id} key={i}>
                    <PostItem postId={post.id}/>
                  </Link>
                )
              })
            )
          }}
        </Query>
      </div>
    </Fragment>
  )

}

export default PostsList;