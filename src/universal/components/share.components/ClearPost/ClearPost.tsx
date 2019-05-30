import * as React from 'react';
import './ClearPost.scss';

const ClearPost: React.FunctionComponent<{}> = () => {
  return (
    <div className="clear-post">
      <span>Loading...</span>
      <span>Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...</span>
      <span>Loading...Loading...Loading...Loading...Loading...Loading...</span>
        <div className="post-item__comments-count">
          <span > comments</span>
        </div>
      </div>
  );
};
export default React.memo(ClearPost);