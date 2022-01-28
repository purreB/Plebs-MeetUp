import React from 'react';
import { Comments } from '../../models/Comments';

import styled from 'styled-components';

const ListItem = styled.li`
  list-style: none;
`;

const CommentsList: React.FC<{ comments: Comments[] }> = (props) => {
  return (
    <ul>
      {props.comments.map((comment) => (
        <ListItem key={comment.id}>
          {comment.posted.replace('T', ' ').slice(0, -8)} : {comment.comment}
        </ListItem>
      ))}
    </ul>
  );
};

export default CommentsList;
