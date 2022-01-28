import { useState, useEffect, MouseEvent } from 'react';
import { Event } from '../../models/Event';
import styled from 'styled-components';
import Landing from '../Landing/Landing';
import NewComment from '../Comments/NewComment';
import CommentsList from '../Comments/CommentsList';
import { Comment } from '../../models/Comments';

const eventData: Event[] = [
  {
    id: 1,
    name: 'Music Festival Stockholm',
    category: { id: 1, name: 'music', img: 'hej' },
    date: '2022-03-10',
    time: '15:00',
    comments: [],
  },
  {
    id: 2,
    name: 'Music Festival Gothenburg',
    category: { id: 1, name: 'music', img: 'hej' },
    date: '2022-04-10',
    time: '10:00',
    comments: [],
  },
  {
    id: 3,
    name: 'The Walking Dead Season 50 Release Date',
    category: { id: 2, name: 'Movies', img: 'hej' },
    date: '2022-11-10',
    time: '19:00',
    comments: [],
  },
  {
    id: 4,
    name: 'Fast & Furious 15 premiere',
    category: { id: 2, name: 'Movies', img: 'hej' },
    date: '2022-12-05',
    time: '20:00',
    comments: [],
  },
  {
    id: 5,
    name: 'LAN Event Stockholm',
    category: { id: 3, name: 'Gaming', img: 'hej' },
    date: '2022-10-10',
    time: '15:00',
    comments: [],
  },
  {
    id: 6,
    name: 'LAN Event Gothenburg',
    category: { id: 3, name: 'Gaming', img: 'hej' },
    date: '2022-11-11',
    time: '15:00',
    comments: [],
  },
  {
    id: 7,
    name: 'Art Museum Stockholm',
    category: { id: 4, name: 'Art', img: 'hej' },
    date: '2022-03-03',
    time: '11:00',
    comments: [],
  },
  {
    id: 8,
    name: 'Art Museum Gothenburg',
    category: { id: 4, name: 'Art', img: 'hej' },
    date: '2022-04-04',
    time: '13:00',
    comments: [],
  },
  {
    id: 9,
    name: 'Car Festival Stockholm',
    category: { id: 5, name: 'Cars', img: 'hej' },
    date: '2022-05-22',
    time: '13:00',
    comments: [],
  },
  {
    id: 10,
    name: 'Car Festival Gothenburg',
    category: { id: 5, name: 'Cars', img: 'hej' },
    date: '2022-08-21',
    time: '13:00',
    comments: [],
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

const Button = styled.button`
  cursor: pointer;
  :hover {
    background-color: gray;
  }

  .active {
    background-color: green;
  }

  .not-active {
    background-color: orange;
  }
`;

const Events: React.FC<{ favorite: string }> = (props: any) => {
  const [events, setEvents] = useState<Event[]>(eventData);
  const [comments, setComments] = useState<string>('');

  const fetchedUser = JSON.parse(localStorage.getItem('User')!);

  useEffect(() => {
    sortEvents(props.favorite);
    setComments('');
  }, [props.favorite, comments]);

  function sortEvents(arg: string): void {
    if (fetchedUser && fetchedUser.favorite && fetchedUser.favorite === arg) {
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

  const addCommentHandler = (commentText: string, id: number) => {
    const comment = new Comment(commentText, id);

    if (events) {
      events[id].comments.push(comment);
    }

    setComments('rerender');

    console.log(`event ${events[id].name}`, events[id].comments);
  };

  function attendEvent(event: any) {
    let fetchedUser = JSON.parse(localStorage.getItem('User')!);

    if (fetchedUser.event !== undefined) {
      let eventArr = fetchedUser.event;
      eventArr.map((e: any) => {
        if (e.id === event.id) {
          console.log('EYO');
        }
      });
    } else if (fetchedUser.event && fetchedUser.event.length >= 1) {
      //! Cannot add two events yet
      let storageEventArray = [...fetchedUser.event, event];
      storageEventArray.push(event); //* HAVE TO BE SOME TYPE OF ARRAY
      localStorage.setItem('User', JSON.stringify(fetchedUser));
    } else {
      fetchedUser.event = [event]; //* HAVE TO BE SOME TYPE OF ARRAY
      localStorage.setItem('User', JSON.stringify(fetchedUser));
    }
  }
  const buttonHandler = (event: MouseEvent<HTMLButtonElement>) => {
    const button: HTMLButtonElement = event.currentTarget;
    button.style.backgroundColor = 'green';
  };

  return (
    <div>
      <EventUL data-testid='eventList'>
        {events.map((e, i) => (
          <li key={e.id} data-testid='event'>
            <H3>{e.name}</H3>
            <P>{e.category.name}</P>
            <P>{e.date}</P>
            <P>{e.time}</P>

            <button
              onClick={(b) => {
                buttonHandler(b);
                attendEvent(e);
              }}
              data-testid={e.name}
              name={e.name}
            >
              Attend: {e.name}
            </button>
            <div>
              <NewComment onAddComment={addCommentHandler} id={i} />
              {e.comments.map((comment) => (
                <CommentsList comments={[comment]} />
              ))}
            </div>
          </li>
        ))}
      </EventUL>
    </div>
  );
};

export default Events;
