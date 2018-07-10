import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Post(props){

  const actionDetails = {
    id: props.postId,
    author: props.author,
    title: props.title,
    textArea: props.textArea,
    numberOfUpvotes: props.numberOfUpvotes,
    numberOfDownvotes: props.numberOfDownvotes,
    timeStamp: props.timeStamp,
  };

  function handleUpvoteClick() {
    const { dispatch } = props;
    const action = {
      type: 'UPVOTE',
      actionDetails: actionDetails
    };
    dispatch(action);
  }

  function handleDownvoteClick() {
    const { dispatch } = props;
    const action = {
      type: 'DOWNVOTE',
      actionDetails: actionDetails
    };
    dispatch(action);
  }


  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.textArea}</p>
      <p>{props.author}</p>
      <p>{props.numberOfUpvotes - props.numberOfDownvotes}</p>
      <p>{props.timeStamp}</p>
      <button onClick={handleUpvoteClick}>&#8679;</button>
      <button onClick={handleDownvoteClick}>&#8681;</button>
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

export default connect()(Post);
