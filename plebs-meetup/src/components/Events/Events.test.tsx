import Events from './Events';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Categories from '../Category/Categories';

describe('Event list component', () => {
  it('Renders without crashing', () => {
    render(<Categories />);
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
    setTimeout(() => {
      userEvent.click(chosenEventButton);
    }, 100);
    const fetchedUser = JSON.parse(localStorage.getItem('User')!);
    expect(fetchedUser.event).toHaveLength(0);
  });

  it('User can attend multiple events', async () => {
    render(<Categories />);
    const eventOne = screen.getByTestId('Music Festival Stockholm');
    const eventTwo = screen.getByTestId(
      'The Walking Dead Season 50 Release Date'
    );
    userEvent.click(eventTwo);
    userEvent.click(eventOne);
    let fetchedUser = await JSON.parse(localStorage.getItem('User')!);
    let userEvents = fetchedUser.event;
    expect(userEvents).toHaveLength(2);
  });
});
