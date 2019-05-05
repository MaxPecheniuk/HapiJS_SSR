//@flow
import React from 'react';
import { Query } from 'react-apollo';
import { GET_POST } from '../../queries/postItem.query';
import { PostComments } from '../PostComments/PostComments';
import { PostInfo } from '../PostInfo/PostInfo';

import './PostItem.scss'

type PostItemProps = {
	match: any,
	postId: string
}

type PostItemState = {
	showComments: boolean
}

export class PostItem extends React.Component<PostItemProps, PostItemState> {
	state = {
		showComments: false
	}

	onCommentToggle = () => {
		this.setState({
			showComments: !this.state.showComments
		})
	}

	render() {
		let id;
		if (this.props.match === undefined) {
			id = this.props.postId;
		} else {
			id = props.match.params.id
		}
		return (
			<Query query={GET_POST} variables={{'id': id}}>
				{({data, loading, error}) => {
					if (loading) return <div>Loading</div>;
					if (error) return <div>Error</div>;
					return (
						<div className="post-item">
							<PostInfo postInfo={data.postById}/>
							<div onClick={this.onCommentToggle}>Show {data.postById.comment.length} comments</div>
							{this.state.showComments && <PostComments comment={data.postById.comment}/>}
						</div>

					)
				}}
			</Query>
		);
	}

}