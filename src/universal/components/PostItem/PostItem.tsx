import * as React from 'react';
import { Query } from 'react-apollo';
import { GET_POST } from '../../queries/postItem.query';
import loadable from '@loadable/component';
import ClearPost from '../share.components/ClearPost/ClearPost';

import './PostItem.scss';
import { match } from 'react-router';
import { useState } from 'react';

const PostInfo = loadable(() => import('../PostInfo/PostInfo'));
const PostComments = loadable(() => import('../PostComments/PostComments'));

interface IPostItemProps {
  match?: match<{ id: string }>;
  postId: string;
}

interface PostItemResponse {
  postById: PostItemType;
}

export interface PostItemType {
  commentsIds: Array<string>;
  date: number;
  description: string;
  id: string;
  title: string;
}

const PostItem: React.FunctionComponent<IPostItemProps> = (props: IPostItemProps) => {
  const [showComments, commentToggle] = useState<boolean>(false);

  const onCommentToggle = () => {
    commentToggle(!showComments);
  };
  // tslint:disable-next-line
  const {match, postId} = props;

  let id: string;
  if (match === undefined) {
    id = postId;
  } else {
    id = match.params.id;
  }

  return (
    <Query<PostItemResponse> query={GET_POST} variables={{'id': id}}>
      {({data, loading, error}) => {
        if (loading) {
          return <div><ClearPost/></div>;
        }
        if (error) {
          return <div>Error</div>;
        }
        // console.log(showComments);
        return (
          <div className="post-item">
            <PostInfo postInfo={data.postById}/>
            <div className="post-item__comments-count">
                <span onClick={onCommentToggle}>
                  {showComments ? 'Hide' : data.postById.commentsIds.length} comments
                </span>
            </div>
            {showComments && <PostComments commentsIds={data.postById.commentsIds}/>}
          </div>
        );
      }}
    </Query>
  );

};
export default PostItem;

//
// class PostItem extends React.Component<IPostItemProps, IState> {
//   state = {
//     showComments: false
//   };
//
//   onCommentToggle = () => {
//     this.setState({
//       showComments: !this.state.showComments
//     });
//   }
//
//   render() {
//     // tslint:disable-next-line
//     const {match, postId} = this.props;
//     const {showComments} = this.state;
//     let id: string;
//     if (match === undefined) {
//       id = postId;
//     } else {
//       id = match.params.id;
//     }
//     return (
//
//       <Query<PostItemResponse> query={GET_POST} variables={{'id': id}} >
//         {({data, loading, error}) => {
//           if (loading) { return <div><ClearPost/></div>; }
//           if (error) { return <div>Error</div>; }
//           console.log(data.postById.commentsIds);
//           return (
//             <div className="post-item">
//               <PostInfo postInfo={data.postById}/>
//               <div className="post-item__comments-count">
//                 <span onClick={this.onCommentToggle}>
//                   {showComments ? 'Hide' : data.postById.commentsIds.length} comments
//                 </span>
//               </div>
//               {showComments && <PostComments commentsIds={data.postById.commentsIds}/>}
//             </div>
//           );
//         }}
//       </Query>
//     );
//   }
//
// }
// export default PostItem;