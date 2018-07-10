import React from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

function NewPostForm(props){
  let title = null;
  let textArea = null;

  function handleNewPostSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: 'ADD_POST',
      author: 'me',
      title: title.value,
      textArea: textArea.value,
      numberOfUpvotes: 4,
      numberOfDownvotes: 5,
      timeStamp: new Moment().format('MMMM Do YYYY, h:mm:ss a'),
      id: v4()
    };
    dispatch(action);
    title.value = '';
    textArea.value = '';
  }

  return (
    <div>
      <style jsx>{`
      input {
        margin: 20px;
      }
    `}
      </style>
      <form onSubmit={handleNewPostSubmission}>
        <input
          type='text'
          id='title'
          placeholder='Title'
          ref={(input) => {title = input;}}/>
        <input
          type='text'
          id='textArea'
          placeholder='Text'
          ref={(input) => {textArea = input;}}/>
        <button type='submit'>Submit Post</button>
      </form>
    </div>
  );
}

export default connect()(NewPostForm);
