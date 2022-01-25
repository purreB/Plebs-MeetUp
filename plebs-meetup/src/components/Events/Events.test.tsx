import Events from './Events';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Categories from '../Category/Categories';

describe('Event list component', () => {
  it('Renders without crashing', () => {
    render(<Events />);
  });

  it('Renders correct amount of events', () => {
    render(<Events />);
    const items = screen.getAllByTestId('event');
    expect(items.length).toBe(10);
  });

  it('When attend button is clicked, user gets signed up to the event', () => {
    render(
      <>
        <Categories />
        <Events />
      </>
    );
    const chosenEventButton = screen.getByTestId('Music Festival Stockholm');
    userEvent.click(chosenEventButton);
    const fetchedUser = JSON.parse(localStorage.getItem('User')!);
    expect(fetchedUser).toHaveProperty('id' && 'name' && 'event');
  });

  it('User can not sign up to same event twice', () => {
    render(
      <>
        <Categories />
        <Events />
      </>
    );
    const chosenEventButton = screen.getByTestId('Music Festival Stockholm');
    userEvent.click(chosenEventButton);
    userEvent.click(chosenEventButton);
    const fetchedUser = JSON.parse(localStorage.getItem('User')!);
    expect(fetchedUser.event).toHaveLength(1);
  });

  it('User can attend multiple events', () => {
    render(
      <>
        <Categories />
        <Events />
      </>
    );
    const chosenEventButton1 = screen.getByTestId('Music Festival Stockholm');
    const chosenEventButton2 = screen.getByTestId('Music Festival Gothenburg');
    userEvent.click(chosenEventButton1);
    userEvent.click(chosenEventButton2);
    const fetchedUser = JSON.parse(localStorage.getItem('User')!);
    expect(fetchedUser.event).toHaveLength(2);
  });
  // When attend button is clicked, button text changes to "cancel attending"
  // When trying to sign up twice to event, it insteads cancels the sign up.
});
