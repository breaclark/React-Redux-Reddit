import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from './PostList';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterPostList: []
    };
  }
  render() {
    return (
      <div>
        <NewPostForm />
        <PostList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    masterPostList: state
  };
};

App.propTypes = {
  masterPostList: PropTypes.object
};

export default connect()(App);
