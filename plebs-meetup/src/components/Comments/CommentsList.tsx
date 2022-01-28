import React from 'react';
import { Comments } from '../../models/Comments';

const CommentsList: React.FC<{ comments: Comments[] }> = (props) => {
  return (
    <ul>
      {props.comments.map((comment) => (
        <li key={comment.id}>{comment.comment}</li>
      ))}
    </ul>
  );
};

export default CommentsList;
