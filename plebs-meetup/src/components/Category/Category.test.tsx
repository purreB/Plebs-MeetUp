import Categories from './Categories';
import { render } from '@testing-library/react';

describe('Category list component', () => {
  it('renders without crashing', () => {
    render(<Categories />);
  });
});
