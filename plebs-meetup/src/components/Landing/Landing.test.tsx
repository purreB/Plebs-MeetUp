import Landing from './Landing';
import { render } from '@testing-library/react';

describe('Event list component', () => {
  it('Renders without crashing', () => {
    render(<Landing />);
  });
});