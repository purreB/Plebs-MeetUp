import { useState, useEffect } from 'react';
import { Event } from '../../models/Event';
import styled from 'styled-components';
import Landing from '../Landing/Landing';

const eventData: Event[] = [
  {
    id: 1,
    name: 'Music Festival Stockholm',
    category: { id: 1, name: 'music', img: 'hej' },
    date: '2022-03-10',
    time: '15:00',
  },
  {
    id: 2,
    name: 'Music Festival Gothenburg',
    category: { id: 1, name: 'music', img: 'hej' },
    date: '2022-04-10',
    time: '10:00',
  },
  {
    id: 3,
    name: 'The Walking Dead Season 50 Release Date',
    category: { id: 2, name: 'Movies', img: 'hej' },
    date: '2022-11-10',
    time: '19:00',
  },
  {
    id: 4,
    name: 'Fast & Furious 15 premiere',
    category: { id: 2, name: 'Movies', img: 'hej' },
    date: '2022-12-05',
    time: '20:00',
  },
  {
    id: 5,
    name: 'LAN Event Stockholm',
    category: { id: 3, name: 'Gaming', img: 'hej' },
    date: '2022-10-10',
    time: '15:00',
  },
  {
    id: 6,
    name: 'LAN Event Gothenburg',
    category: { id: 3, name: 'Gaming', img: 'hej' },
    date: '2022-11-11',
    time: '15:00',
  },
  {
    id: 7,
    name: 'Art Museum Stockholm',
    category: { id: 4, name: 'Art', img: 'hej' },
    date: '2022-03-03',
    time: '11:00',
  },
  {
    id: 8,
    name: 'Art Museum Gothenburg',
    category: { id: 4, name: 'Art', img: 'hej' },
    date: '2022-04-04',
    time: '13:00',
  },
  {
    id: 9,
    name: 'Car Festival Stockholm',
    category: { id: 5, name: 'Cars', img: 'hej' },
    date: '2022-05-22',
    time: '13:00',
  },
  {
    id: 10,
    name: 'Car Festival Gothenburg',
    category: { id: 5, name: 'Cars', img: 'hej' },
    date: '2022-08-21',
    time: '13:00',
  },
];
const P = styled.p``;

const H3 = styled.h3`
  margin: 0;
  padding: 0;
`;

const EventUL = styled.ul`
  margin: 0;
  padding: 0;
`;

function Events(props: { favorite: string }) {
  const [events, setEvents] = useState<Event[]>(eventData);

  const fetchedUser = JSON.parse(localStorage.getItem('User')!);

  useEffect(() => {
    sortEvents(props.favorite);
  }, [props.favorite]);

  function sortEvents(arg: string): void {
    if (fetchedUser.favorite === arg) {
      const prefferdArray = events.filter(
        (element) => element.category.name === arg
      );
      const restArray = events.filter(
        (element) => element.category.name !== arg
      );
      const joinArray: Event[] = prefferdArray.concat(restArray);

      setEvents(joinArray);
    }
  }

  return (
    <div>
      <EventUL data-testid='eventList'>
        {events.map((e) => (
          <li key={e.id} data-testid={'event' + e.id}>
            <H3>{e.name}</H3>
            <P>{e.category.name}</P>
            <P>{e.date}</P>
            <P>{e.time}</P>
          </li>
        ))}
      </EventUL>
    </div>
  );
}

export default Events;
