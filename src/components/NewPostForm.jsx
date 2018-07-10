import React from 'react';

function NewPostForm(){
  return (
    <div>
      <style jsx>{`
      input {
        margin: 20px;
      }
    `}
      </style>
      <form>
        <input type='text' placeholder='Title'/>
        <input type='text' placeholder='Text'/>
        <button type='submit'>Submit Post</button>
      </form>
    </div>
  );
}

export default NewPostForm;
