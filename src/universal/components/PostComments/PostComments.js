//@flow
import * as React from 'react';
import './PostComments.scss'
import type { CommentTypes } from '../../types/post.types';
import { Query } from "react-apollo";
import { GET_COMMENTS } from "../../queries/comments.query";

type PostCommetnsProps = {
	comment: Array<String>
}

export class PostComments extends React.Component<PostCommetnsProps> {
	render() {

		return (
			<Query query={GET_COMMENTS} variables={{'id': this.props.comment}}>
				{({data, loading, error}) => {
					if (loading) return <div>Loading</div>;
					if (error) return <div>Error</div>;
					return (
						<div className="post-item__comments">
							{data.comments.map((comment: CommentTypes, index: number) => {
								return (
									<div className="post-item__comments__item" key={index}>
										<img className="post-item__comments__item__author-avatar" src={comment.author.avatar} alt=""/>
										<span className="post-item__comments__item__author-name">{comment.author.name}</span>
										<span className="post-item__comments__item__comments-text">{comment.text}</span>
									</div>)
							})}
						</div>
					);
				}}
			</Query>
		);
	}
}
