import React from 'react';
import { Query } from 'react-apollo';
import { GET_POST } from '../../queries/postItem.query';
import loadable from '@loadable/component';

import './PostItem.scss';
import ClearPost from '../share.components/ClearPost/ClearPost';

const PostComments = loadable(() => import('../PostComments/PostComments'));
const PostInfo = loadable(() => import('../PostInfo/PostInfo'));

interface IPostItemProps {
  match?: any;
  postId: string;
}

interface IState {
  showComments: boolean;
}
interface IPostType {
  postById: any;
}

class PostItem extends React.Component<IPostItemProps, IState> {
  state = {
    showComments: false
  }

  onCommentToggle = () => {
    this.setState({
      showComments: !this.state.showComments
    });
  }

  render() {
    const {match, postId} = this.props;
    const {showComments} = this.state;
    let id: string;
    if (match === undefined) {
      id = postId;
    } else {
      id = match.params.id;
    }
    return (

      <Query<IPostType> query={GET_POST} variables={{'id': id}} >
        {({data, loading, error}) => {
          if (loading) { return <div><ClearPost/></div>; }
          if (error) { return <div>Error</div>; }
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