//@flow
import * as React from 'react';
import './postComments.scss'
import type {CommentTypes} from '../../types/post.types';

type PostCommetnsProps ={
  comments: Array<CommentTypes>
}

export class PostComments extends React.Component<PostCommetnsProps> {
	render() {
		const {comments} = this.props;
		return (
			<div className="post-item__comments">
				{comments.map((comment: CommentTypes, index: number) => {
					return (
						<div className="post-item__comments__item" key={index}>
							<span className="post-item__comments__item__author-name">{comment.author.name}</span>
							<span className="post-item__comments__item__comments-text">{comment.text}</span>
						</div>)
				})}
			</div>
		);
	}
}