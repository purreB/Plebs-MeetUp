import React from 'react';
import { Comments } from '../../models/Comments';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ListItem = styled(motion.li)`
  list-style: none;
`;

const CommentsList: React.FC<{ comments: Comments[] }> = (props) => {
  return (
    <ul>
      {props.comments.map((comment) => (
        <ListItem
          key={comment.id}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {comment.posted.replace('T', ' ').slice(0, -8)} : {comment.comment}
        </ListItem>
      ))}
    </ul>
  );
};

export default CommentsList;
