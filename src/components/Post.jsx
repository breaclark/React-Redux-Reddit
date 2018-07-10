import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.textArea}</p>
      <p>{props.author}</p>
      <p>{props.numberOfUpvotes}</p>
      <p>{props.numberOfDownvotes}</p>
      <p>{props.timeStamp}</p>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string,
  textArea: PropTypes.string,
  author: PropTypes.string,
  numberOfUpvotes: PropTypes.number,
  numberOfDownvotes: PropTypes.number,
  timeStamp: PropTypes.string
};

export default Post;
