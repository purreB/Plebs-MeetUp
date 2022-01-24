import Events from './Events';
import { render } from '@testing-library/react';

jest.mock('./Events', () => 'Events');
const favorite: string = 'Cars';
describe('Event list component', () => {
  it('Renders without crashing', () => {
    render(<Events favorite={favorite} />);
  });

  it('should display the list', () => {
    const { asFragment } = render(<Events favorite={favorite} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
