export default (state = {}, action) => {
  switch(action.type) {
  case 'ADD_POST' :
    var { author, title, textArea, numberOfUpvotes, numberOfDownvotes, timeStamp, id} = action;
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
  default:
    return state;
  }
};
