import React from 'react';
import { Comment } from '../../models/Comments';

const CommentsList: React.FC<{ comments: Comment[] }> = (props) => {
  return (
    <ul>
      {props.comments.map((comment) => (
        <li key={comment.id}>{comment.comment}</li>
      ))}
    </ul>
  );
};

export default CommentsList;
