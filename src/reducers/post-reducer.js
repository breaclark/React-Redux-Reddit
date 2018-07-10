export default (state = {}, action) => {
  switch(action.type) {
  case 'ADD_POST' :
    var { author, title, textArea, numberOfUpvotes, numberOfDownvotes, timeStamp, id } = action;
    var newState = Object.assign({}, state, {
      [id]: {
        author: author,
        title: title,
        textArea: textArea,
        numberOfUpvotes: numberOfUpvotes,
        numberOfDownvotes: numberOfDownvotes,
        timeStamp: timeStamp,
        id: id
      }
    });
    return newState;

  case 'UPVOTE' :
    var { author, title, textArea, numberOfUpvotes, numberOfDownvotes, timeStamp, id } = action.actionDetails;
    var newState = Object.assign({}, state, {
      [id]: {
        author: author,
        title: title,
        textArea: textArea,
        numberOfUpvotes: numberOfUpvotes + 1,
        numberOfDownvotes: numberOfDownvotes,
        timeStamp: timeStamp,
        id: id
      }
    });
    return newState;

  case 'DOWNVOTE' :
    var { author, title, textArea, numberOfUpvotes, numberOfDownvotes, timeStamp, id } = action.actionDetails;
    var newState = Object.assign({}, state, {
      [id]: {
        author: author,
        title: title,
        textArea: textArea,
        numberOfUpvotes: numberOfUpvotes,
        numberOfDownvotes: numberOfDownvotes + 1,
        timeStamp: timeStamp,
        id: id
      }
    });
    return newState;

  default:
    return state;
  }
};
