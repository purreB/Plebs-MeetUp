import { useState } from 'react';
import { Event } from '../../models/Event';

function Events() {
  const eventData: Event[] = [
    {
      id: 1,
      name: 'Music Festival Stockholm',
      category: { id: 1, name: 'music' },
      date: '2022-03-10',
      time: '15:00',
    },
    {
      id: 2,
      name: 'Music Festival Gothenburg',
      category: { id: 1, name: 'music' },
      date: '2022-04-10',
      time: '10:00',
    },
    {
      id: 3,
      name: 'The Walking Dead Season 50 Release Date',
      category: { id: 2, name: 'Movies' },
      date: '2022-11-10',
      time: '19:00',
    },
    {
      id: 4,
      name: 'Fast & Furious 15 premiere',
      category: { id: 2, name: 'Movies' },
      date: '2022-12-05',
      time: '20:00',
    },
    {
      id: 5,
      name: 'LAN Event Stockholm',
      category: { id: 3, name: 'Gaming' },
      date: '2022-10-10',
      time: '15:00',
    },
    {
      id: 6,
      name: 'LAN Event Gothenburg',
      category: { id: 3, name: 'Gaming' },
      date: '2022-11-11',
      time: '15:00',
    },
    {
      id: 7,
      name: 'Art Museum Stockholm',
      category: { id: 4, name: 'Art' },
      date: '2022-03-03',
      time: '11:00',
    },
    {
      id: 8,
      name: 'Art Museum Gothenburg',
      category: { id: 4, name: 'Art' },
      date: '2022-04-04',
      time: '13:00',
    },
    {
      id: 9,
      name: 'Car Festival Stockholm',
      category: { id: 5, name: 'Cars' },
      date: '2022-05-22',
      time: '13:00',
    },
    {
      id: 10,
      name: 'Car Festival Gothenburg',
      category: { id: 5, name: 'Cars' },
      date: '2022-08-21',
      time: '13:00',
    },
  ];
  const [events, setEvents] = useState<Event[]>(eventData);
  return (
    <div>
      <ul className="list-of-events">
        {events.map((e) => (
          <li key={e.id} data-testid={'event' + e.id}>
            <h3>{e.name}</h3>
            <p>{e.category.name}</p>
            <p>{e.date}</p>
            <p>{e.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Events;
