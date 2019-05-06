//@flow
import React from 'react';
import { Query } from 'react-apollo';
import { GET_POST } from '../../queries/postItem.query';
import { PostComments } from '../PostComments/PostComments';
import { PostInfo } from '../PostInfo/PostInfo';

import './PostItem.scss'
import { Link } from 'react-router-dom';

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
    let id: string;
    if (this.props.match === undefined) {
      id = this.props.postId;
    } else {
      id = this.props.match.params.id
    }
    return (
      <Query query={GET_POST} variables={{'id': id}}>
        {({data, loading, error}) => {
          if (loading) return <div>Loading</div>;
          if (error) return <div>Error</div>;
          return (
            <div className="post-item">
              <PostInfo postInfo={data.postById}/>
              <div className="post-item__comments-count">
                <span onClick={this.onCommentToggle}>{data.postById.commentsIds.length} comments</span>
              </div>
              {this.state.showComments && <PostComments commentsIds={data.postById.commentsIds}/>}
            </div>

          )
        }}
      </Query>
    );
  }

}