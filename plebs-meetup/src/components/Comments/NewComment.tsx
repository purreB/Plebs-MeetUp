import { useRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Button = styled(motion.button)`
  background-color: #ca6702;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.2);
  padding: 2px;
  margin-left: 1rem;
  border-radius: 0.2rem;
  border-bottom: 1px solid;
  width: 50px;
  color: white;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 1.5rem;
`;

const NewComment: React.FC<{
  onAddComment: (text: string, id: number) => void;
  id: number;
}> = (props) => {
  const commentInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = commentInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }
    props.onAddComment(enteredText, props.id);
  };

  const reset = () => {
    commentInputRef.current!.value = '';
  };

  return (
    <Wrapper>
      <form
        style={{ marginTop: '1rem' }}
        onSubmit={(e) => {
          submitHandler(e);
          reset();
        }}
      >
        <label htmlFor='text'>Post a comment: </label>
        <input type='text' id='text' ref={commentInputRef} />
        <Button
          data-testid={props.id}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05, backgroundColor: '#f15810' }}
        >
          Post
        </Button>
      </form>
    </Wrapper>
  );
};

export default NewComment;
