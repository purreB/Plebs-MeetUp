import { useRef } from 'react';

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

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='text'>Post a comment</label>
      <input type='text' id='text' ref={commentInputRef} />
      <button>Post</button>
    </form>
  );
};

export default NewComment;
