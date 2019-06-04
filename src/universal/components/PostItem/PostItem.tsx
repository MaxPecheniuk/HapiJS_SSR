import * as React from 'react';
import './PostItem.scss';
import PostInfo from '../PostInfo/PostInfo';
import CommentCount from '../CommentCount/CommentCount';
import { useState } from 'react';
import loadable from '@loadable/component';
const PostComments = loadable(() => import('../PostComments/PostComments'));

export interface IPostItemTypes {
  commentsIds: Array<string>;
  date: number;
  description: string;
  id: string;
  title: string;
}

interface IPostItemProps {
  postData: IPostItemTypes;
  lang: string | any;// tslint:disable-line
}

const PostItem: React.FunctionComponent<IPostItemProps> = (props: IPostItemProps) => {
  const [showComments, commentToggle] = useState<boolean>(false);
  const onCommentToggle = () => {
    commentToggle(!showComments);
  };
  const { postData, lang} = props;

  return (
    <div className="post-item">
      <PostInfo postInfo={postData} lang={lang}/>
      <CommentCount
        commentLength={postData.commentsIds.length}
        showComments={showComments}
        onCommentToggle={onCommentToggle}
      />
      {showComments && <PostComments commentsIds={postData.commentsIds}/>}
    </div>
  );

};

export default PostItem;