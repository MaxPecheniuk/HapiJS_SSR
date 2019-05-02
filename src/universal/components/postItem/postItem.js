//@flow
import React from 'react';
import { Query } from 'react-apollo';
import { GET_POST } from '../../queries/postItem.query';
import { PostComments } from '../postComments/postComments';
import { PostInfo } from '../postInfo/postInfo';

import './postItem.scss'

type PostItemProps = {
  match: any,
  postId: string
}

export const PostItem: React.SFC<PostItemProps> = (props: PostItemProps) => {
  let id;
  if (props.match === undefined) {
    id = props.postId;
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
              {props.match && (<PostComments comments={data.postById.comments}/>)}
            </div>
          )
        }}
      </Query>
    );

}