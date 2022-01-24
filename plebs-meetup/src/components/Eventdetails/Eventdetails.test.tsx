import Eventdetails from './Eventdetails';
import { render } from '@testing-library/react';

describe('Event list component', () => {
  it('Renders without crashing', () => {
    render(<Eventdetails />);
  });
});
