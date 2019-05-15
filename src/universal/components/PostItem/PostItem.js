//@flow
import React from 'react';
import { Query } from 'react-apollo';
import { GET_POST } from '../../queries/postItem.query';
import ClearPost from '../share.components/ClearPost/ClearPost';
import loadable from '@loadable/component';

import './PostItem.scss'

const PostInfo = loadable(()=> import('../PostInfo/PostInfo'));
const PostComments = loadable(()=> import('../PostComments/PostComments'));

type PostItemProps = {
  match: any,
  postId: string
}

type PostItemState = {
  showComments: boolean
}

class PostItem extends React.Component<PostItemProps, PostItemState> {
  state = {
    showComments: false
  }

  onCommentToggle = () => {
    this.setState({
      showComments: !this.state.showComments
    })
  }

  render() {
    const {match, postId} = this.props;
    const {showComments} = this.state;
    let id: string;
    if (match === undefined) {
      id = postId;
    } else {
      id = match.params.id
    }
    return (
      <Query query={GET_POST} variables={{'id': id}}>
        {({data, loading, error}) => {
          if (loading) return (<div><ClearPost/></div>);
          if (error) return <div>Error</div>;
          return (
            <div className="post-item">
              <PostInfo postInfo={data.postById}/>
              <div className="post-item__comments-count">
                <span onClick={this.onCommentToggle}>
                  {showComments ? 'Hide' : data.postById.commentsIds.length} comments
                </span>
              </div>
              {showComments && <PostComments commentsIds={data.postById.commentsIds}/>}
            </div>

          )
        }}
      </Query>
    );
  }

}
export default PostItem;