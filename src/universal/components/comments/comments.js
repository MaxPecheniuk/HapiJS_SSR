import * as React from 'react';
import './comments.scss'
export class Comments extends React.Component {
	render() {
		const comments = this.props.comments;
		console.log(comments);
		return (
			<div className="post-item__comments">
				{comments.map((comment, index) => {
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