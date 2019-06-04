import * as React from 'react';
import { FormattedMessage } from 'react-intl';

interface ICommentCountProps {
  showComments: boolean;
  commentLength: number;
  onCommentToggle(): void;
}

const CommentCount: React.FunctionComponent<ICommentCountProps> = (props: ICommentCountProps) => {
const {onCommentToggle, showComments, commentLength} = props;
  return (
      <div className="post-item__comments-count">
                <span onClick={onCommentToggle}>
                  {showComments ? <FormattedMessage id="postItem.showComments"/> :
                    commentLength}
                  {!showComments ? <FormattedMessage id="postItem.comments" /> : null}

                </span>
      </div>
  );
};
export default CommentCount;