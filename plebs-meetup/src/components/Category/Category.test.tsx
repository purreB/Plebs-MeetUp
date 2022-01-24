import Categories from './Categories';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Category list component', () => {
  const setup = () => render(<Categories />);

  it('renders without crashing', () => {
    setup();
  });

  it('renders correct amount of categories', () => {
    setup();
    const items = screen.getAllByRole('listitem');
    expect(items.length).toBe(5);
  });

  it('A first time user gets saved to LocalStorage', () => {
    setup();
    const fetchedUser = JSON.parse(localStorage.getItem('User')!);
    expect(fetchedUser).toHaveProperty('id' && 'name');
  });

  it('when a category is clicked, it gets added to user favorite', () => {
    setup();
    const chosenCategory = screen.getByText('MUSIC');
    userEvent.click(chosenCategory);
    const fetchedUser = JSON.parse(localStorage.getItem('User')!);
    expect(fetchedUser).toHaveProperty('id' && 'name' && 'favorite', 'Music');
  });
});
