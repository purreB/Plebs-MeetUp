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
    const chosenEventButton = screen.getByTestId('1');
    userEvent.click(chosenEventButton);
    const fetchedUser = JSON.parse(localStorage.getItem('User')!);
    expect(fetchedUser).toHaveProperty('id' && 'name' && 'event');
  });

  it('User can not sign up to same event twice', async () => {
    render(<Events />);
    const chosenEventButton = screen.getByTestId('1');
    userEvent.click(chosenEventButton);
    setTimeout(() => {
      userEvent.click(chosenEventButton);
    }, 100);
    const fetchedUser = await JSON.parse(localStorage.getItem('User')!);
    expect(fetchedUser.event).toHaveLength(0);
  });

  it('User can attend multiple events', async () => {
    render(<Events />);
    const eventOne = screen.getByTestId('1');
    const eventTwo = screen.getByTestId('2');
    userEvent.click(eventOne);
    userEvent.click(eventTwo);
    let fetchedUser = await JSON.parse(localStorage.getItem('User')!);
    let userEvents = fetchedUser.event;
    expect(userEvents).toHaveLength(2);
  });
  // When attend button is clicked, button text changes to "cancel attending"
});
