import React from 'react';
import dummyData from '../../dummy-data';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const [data] = props;

  const comments = document.querySelector(dummyData.comments)

  return (
    <div>
      <h2 > {comments} </h2>
    </div>
  );
};

export default Comments;
