import React from 'react';
import { connect } from 'react-redux';
import CommentList from './comment_list/CommentList';
import AddComment from './AddComment/AddComment';
import { createComment, deleteComment } from './redux/actions/actions';
import './index.css';

let App = (props) => {
const { comments, createComment, deleteComment } = props;

  return (
    <div>
      <AddComment createComment={createComment}/>
      <CommentList comments={comments} deleteComment={deleteComment}/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    comments: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createComment: (inputCache) => dispatch(createComment(inputCache)),
    deleteComment: (id) => dispatch(deleteComment(id))
  }
}

export default App = connect(mapStateToProps, mapDispatchToProps)(App)
