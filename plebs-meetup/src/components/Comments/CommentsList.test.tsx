import { render, screen } from '@testing-library/react';
import CommentsList from './CommentsList';
import Events from '../Events/Events';
import { Comment, Comments } from '../../models/Comments';
import userEvent from '@testing-library/user-event';
import NewComment from './NewComment';

describe('CommentsList component', () => {
  let testComments: Comments[];

  let jsxCard: any;
  let mockAddCommentHandler: jest.Mock;

  beforeEach(() => {
    mockAddCommentHandler = jest.fn(() => {});

    jsxCard = (
      <Events favorite={'Cars'}>
        <CommentsList comments={testComments} />
        <NewComment onAddComment={mockAddCommentHandler} id={1}></NewComment>
      </Events>
    );
  });
  it('should render without crash', () => {
    render(jsxCard);
  });

  it('should render an inputfield', () => {
    render(jsxCard);

    const commentInput = screen.getByLabelText(/Post a comment/i);
    expect(commentInput).toBeInTheDocument();
  });
});
