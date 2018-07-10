import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from './PostList';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <NewPostForm />
        <PostList postList={this.props.masterPostList} />
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

export default withRouter(connect(mapStateToProps)(App));
