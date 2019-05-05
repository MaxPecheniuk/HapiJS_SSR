import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import { GET_POSTS } from '../../queries/posts.query';
import { Link } from 'react-router-dom';
import type { PostTypes } from '../../types/post.types';

import './PostsList.scss';
import { PostItem } from '../PostItem/PostItem';
// import { SearchForm } from '../SearchForm/SearchForm';

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
								console.log(post);
								return (
									<PostItem postId={post.id} key={i}/>
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