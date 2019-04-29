import React from 'react';
import { Query } from "react-apollo";
import { GET_POST } from "../../queries/postItem.query";
import { Comments } from "../comments/comments";

import './postItem.scss'
export class PostItem extends React.Component {
	render() {
		const id = this.props.match.params.id;
		return (
			<Query query={GET_POST} variables={{"id": id}}>
				{({data, loading, error}) => {
					if (loading) return <div>Loading</div>;
					if (error) return <div>Error</div>;
					return (
						<div className="post-item">
							<div className="post-item__info">
								<span className="post-item__info__title">{data.postById.title}</span>
								<span className="post-item__info__description">{data.postById.description}</span>
							</div>
							<Comments comments={data.postById.comments}/>

						</div>
					)
				}}
			</Query>
		);
	}
}