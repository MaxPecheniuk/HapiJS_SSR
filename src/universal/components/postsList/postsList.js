import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import { GET_POSTS } from '../../queries/posts.query';
import { Link } from "react-router-dom";

import './postsList.scss';

class PostsList extends React.Component {

	render() {
		return (
			<Fragment>
				<Query query={GET_POSTS}>
					{({data, loading, error}) => {
						if (loading) return <div>Loading</div>;
						if (error) return <div>Error</div>;
						return (
							data.posts.map((post, i) => {
								return (
									<div className="posts-list">
										<Link to={'/post/' + post.id} key={i}>
											<div className="posts-list__item">
												<div>{post.title}</div>
												<div>{post.description}</div>
											</div>
										</Link>
									</div>
								)
							})
						)
					}}
				</Query>
			</Fragment>
		)
	}
}

export default PostsList;