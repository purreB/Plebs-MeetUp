import { useState } from 'react';
import { Event } from '../../models/Event';
import styled from 'styled-components';

import device from '../../styles/mediaqueries';

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

  const P = styled.p`
padding:0;
margin:0;
margin-top:-0.2em;
  `

  const H3 = styled.h3`
  margin-top:0.5em;
  padding:0;
  text-align:center;
 
  `

  const EventUL = styled.ul`
list-style-type: none;
display: flex;
justify-content: center;
align-items:center;
flex-direction:column;
margin:0;
padding:0;
margin-top:4em;


@media${device.mobileL}{
  background-image: linear-gradient(to bottom, #ffffff, #f6f6f7, #edeeef, #e4e5e7, #dbdddf);
}
  `
    const EventsLI = styled.li`
  padding:0;
  margin:0;
    `;

const Eventsdiv = styled.div`
width:290px;
background-color:white;
border-radius:8px;
position:relative;
margin-top:1.8em;

box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

const CategoryImage = styled.img`
object-fit: contain;
border-top-left-radius: 8px;
border-top-right-radius: 8px;
max-width:100%;
height:100%;

`;

const Minidiv = styled.div`
position:absolute;
background-color:#fff;
margin-top:-15%;
width:100%;
height:17%;
transform: translate(0px, 25px) skew(0deg, 6deg);
  
`

const Textdiv = styled.div`
display:flex;
position:relative;
z-index:99;
flex-direction:column;
margin-top:-0.5em;
padding:0 0.5em;
padding-bottom:1.3em;
`

  const allEvents = eventData.map(data => {
    return data
  })

  // console.log(totalEvents);

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

  return (
    <div>
      <EventUL>
      <H3 style={{textAlign:"center", fontSize:"1.8em", fontWeight:"400"}}>Evenemang just nu</H3>
        {events.map((e) => (
          <EventsLI key={e.id} data-testid={'event' + e.id}>
            <Eventsdiv>
              <CategoryImage src={e.category.img}/>
              <Minidiv></Minidiv>
            <Textdiv>
            <P style={{fontWeight:"400", fontSize:"0.8em"}}>{e.date}, {e.time}</P>
            {/* <P>Kategori:{e.category.name.charAt(0).toUpperCase() + e.category.name.slice(1)}</P> */}
            
            <P style={{paddingTop:"0.5em", fontWeight:"600"}}>{e.name}</P>
            </Textdiv>
            
            </Eventsdiv>
          </EventsLI>
        ))}
      </EventUL>
    </div>
  );
}

export default Events;
