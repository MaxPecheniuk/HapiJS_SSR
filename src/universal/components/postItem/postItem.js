//@flow
import React from 'react';
import { Query } from 'react-apollo';
import { GET_POST } from '../../queries/postItem.query';
import { PostComments } from '../postComments/postComments';
import { PostInfo } from '../postInfo/postInfo';

import './postItem.scss'

type PostItemProps = {
  match: any
}

export class PostItem extends React.Component<PostItemProps> {
  render() {
    const id = this.props.match.params.id;
    return (
      <Query query={GET_POST} variables={{'id': id}}>
        {({data, loading, error}) => {
          if (loading) return <div>Loading</div>;
          if (error) return <div>Error</div>;
          return (
            <div className="post-item">
              <PostInfo postInfo={data.postById}/>
              <PostComments comments={data.postById.comments}/>
            </div>
          )
        }}
      </Query>
    );
  }
}