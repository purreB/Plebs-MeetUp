import { useState } from 'react';
import { Event } from '../../models/Event';
import styled from 'styled-components';
import Landing from '../Landing/Landing';

function Events() {
  const eventData: Event[] = [
    {
      id: 1,
      name: 'Music Festival Stockholm',
      category: { id: 1, name: 'music', img: 'hej' },
      date: '2022-03-10',
      time: '15:00',
      comments: undefined,
    },
    {
      id: 2,
      name: 'Music Festival Gothenburg',
      category: { id: 1, name: 'music', img: 'hej' },
      date: '2022-04-10',
      time: '10:00',
      comments: undefined,
    },
    {
      id: 3,
      name: 'The Walking Dead Season 50 Release Date',
      category: { id: 2, name: 'Movies', img: 'hej' },
      date: '2022-11-10',
      time: '19:00',
      comments: undefined,
    },
    {
      id: 4,
      name: 'Fast & Furious 15 premiere',
      category: { id: 2, name: 'Movies', img: 'hej' },
      date: '2022-12-05',
      time: '20:00',
      comments: undefined,
    },
    {
      id: 5,
      name: 'LAN Event Stockholm',
      category: { id: 3, name: 'Gaming', img: 'hej' },
      date: '2022-10-10',
      time: '15:00',
      comments: undefined,
    },
    {
      id: 6,
      name: 'LAN Event Gothenburg',
      category: { id: 3, name: 'Gaming', img: 'hej' },
      date: '2022-11-11',
      time: '15:00',
      comments: undefined,
    },
    {
      id: 7,
      name: 'Art Museum Stockholm',
      category: { id: 4, name: 'Art', img: 'hej' },
      date: '2022-03-03',
      time: '11:00',
      comments: undefined,
    },
    {
      id: 8,
      name: 'Art Museum Gothenburg',
      category: { id: 4, name: 'Art', img: 'hej' },
      date: '2022-04-04',
      time: '13:00',
      comments: undefined,
    },
    {
      id: 9,
      name: 'Car Festival Stockholm',
      category: { id: 5, name: 'Cars', img: 'hej' },
      date: '2022-05-22',
      time: '13:00',
      comments: undefined,
    },
    {
      id: 10,
      name: 'Car Festival Gothenburg',
      category: { id: 5, name: 'Cars', img: 'hej' },
      date: '2022-08-21',
      time: '13:00',
      comments: undefined,
    },
  ];
  const [events, setEvents] = useState<Event[]>(eventData);

  const P = styled.p``;

  const H3 = styled.h3`
    margin: 0;
    padding: 0;
  `;

  const EventUL = styled.ul`
    margin: 0;
    padding: 0;
  `;
  // const allEvents = eventData.map((data) => {
  //   return data;
  // });

  // const totalEvents = allEvents.filter((data) => {
  //   return data.category.id;
  // });

  // console.log(totalEvents);

  function attendEvent(event: any) {
    let fetchedUser = JSON.parse(localStorage.getItem('User')!);
    let userEventExists: boolean = false;
    let eventAlreadyAdded: boolean = false;

    if (fetchedUser.event !== undefined) {
      userEventExists = true;
      if (userEventExists) {
        let eventArr = fetchedUser.event;
        eventArr.map((e: any) => {
          if (e.id === event.id) {
            console.warn('EVENT ALREADY ADDED TO LIST');
            let index = eventArr.indexOf(e);
            eventArr.splice(index, 1);
            eventAlreadyAdded = true;
            if (eventAlreadyAdded) {
              fetchedUser.event = eventArr;
              console.log(fetchedUser.event);
              localStorage.setItem('User', JSON.stringify(fetchedUser));
            }
          }
          return eventAlreadyAdded; //&& eventArr;
        });
      }
    } else {
      fetchedUser.event = [event];
      localStorage.setItem('User', JSON.stringify(fetchedUser));
    }
    if (userEventExists && eventAlreadyAdded === false) {
      fetchedUser.event = [event, ...fetchedUser.event];
      localStorage.setItem('User', JSON.stringify(fetchedUser));
    }
  }

  return (
    <div>
      <EventUL>
        {events.map((e) => (
          <li key={e.id} data-testid="event">
            <H3>{e.name}</H3>
            <P>{e.category.name}</P>
            <P>{e.date}</P>
            <P>{e.time}</P>
            <button onClick={() => attendEvent(e)} data-testid={e.name}>
              Attend: {e.name}
            </button>
          </li>
        ))}
      </EventUL>
    </div>
  );
}

export default Events;
