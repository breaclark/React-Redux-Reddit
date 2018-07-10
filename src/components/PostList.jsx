import React from 'react';
import Post from './post';
import PropTypes from 'prop-types';

function PostList(props){
  return (
    <div>
      <hr/>
      {Object.keys(props.postList).map(function(postId) {
        const post = props.postList[postId];
        return <Post title={post.title}
          textArea={post.textArea}
          author={post.author}
          numberOfUpvotes={post.numberOfUpvotes}
          numberOfDownvotes={post.numberOfDownvotes}
          timeStamp={post.timeStamp}
          postId={postId}
          key={postId} />;
      })}
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.object
};

export default PostList;
