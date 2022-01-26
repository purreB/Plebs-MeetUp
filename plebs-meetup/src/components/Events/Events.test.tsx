import Events from './Events';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Categories from '../Category/Categories';

describe('Event list component', () => {
  it('Renders without crashing', () => {
    render(<Events favorite={'Cars'} />);
  });

  it('Renders correct amount of events', () => {
    render(<Events favorite={'Cars'} />);
    const items = screen.getAllByTestId('event');
    expect(items.length).toBe(10);
  });

  it('When attend button is clicked, user gets signed up to the event', () => {
    render(<Categories />);
    const chosenEventButton = screen.getByTestId('Music Festival Stockholm');
    userEvent.click(chosenEventButton);
    const fetchedUser = JSON.parse(localStorage.getItem('User')!);
    expect(fetchedUser).toHaveProperty('id' && 'name' && 'event');
  });

  it('User can not sign up to same event twice', () => {
    render(<Categories />);
    const chosenEventButton = screen.getByTestId('Music Festival Stockholm');
    userEvent.click(chosenEventButton);
    userEvent.click(chosenEventButton);
    const fetchedUser = JSON.parse(localStorage.getItem('User')!);
    expect(fetchedUser.event).toHaveLength(1);
  });
  // User can attend multiple events
  // When attend button is clicked, button text changes to "cancel attending"
  // When trying to sign up twice to event, it insteads cancels the sign up.
});
