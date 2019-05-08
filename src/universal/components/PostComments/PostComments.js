//@flow
import * as React from 'react';
import { Query } from 'react-apollo';
import { GET_COMMENTS } from '../../queries/comments.query';

import './PostComments.scss'
import SpinnerLoader from '../share.components/SpinerLoader/SpinnerLoader';

export type CommentTypes = {
  id: string,
  text: string,
  author: AuthorTypes
}

export type AuthorTypes = {
  id: string,
  avatar: string,
  name: string
}

type PostCommentsProps = {
  commentsIds: Array<String>
}

export const PostComments: React.SFC<PostCommentsProps> = (props: PostCommentsProps) => {
  return (
    <Query query={GET_COMMENTS} variables={{'id': props.commentsIds}}>
      {({data, loading, error}) => {
        if (loading) return <SpinnerLoader/>;
        if (error) return <div>Error</div>;
        return (
          <div className="post-item__comments">
            {data.comments.map((comment: CommentTypes, index: number) => {
              return (
                <div className="post-item__comments__item" key={index}>
                  <img
                    className="post-item__comments__item__author-avatar"
                    src={comment.author.avatar}
                  />
                  <div className="post-item__comments__item__data">
                    <span className="post-item__comments__item__data__author-name">{comment.author.name}</span>
                    <span className="post-item__comments__item__data__comments-text">{comment.text}</span>
                  </div>

                </div>)
            })}
          </div>
        );
      }}
    </Query>
  );
}
