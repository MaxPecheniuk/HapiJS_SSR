import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import { GET_POSTS } from '../../queries/posts.query';
import { Link } from "react-router-dom";
import type {PostTypes} from '../../types/post.types';

import './postsList.scss';
// import { SearchForm } from '../serachForm/serachForm';

class PostsList extends React.Component {

  render() {
		return (
			<Fragment>
        {/*<SearchForm/>*/}
				<Query query={GET_POSTS}>
					{({data, loading, error}) => {
						if (loading) return <div>Loading</div>;
						if (error) return <div>Error</div>;
						return (
							data.posts.map((post: PostTypes, i) => {
								return (
									<div className="posts-list" key={i}>
										<Link to={'/post/' + post.id} >
											<div className="posts-list__item">
												<div className="posts-list__item__title">
                          {post.title}
												</div>
                        <div className="posts-list__item__date">
                          {new Date(post.date * 1000).toLocaleDateString()}
                        </div>
												<div className="posts-list__item__description">
                          {post.description}
												</div>
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