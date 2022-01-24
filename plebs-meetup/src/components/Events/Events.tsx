import { useState } from 'react';
import { Event } from '../../models/Event';
import styled from 'styled-components';

import device from '../../styles/mediaqueries';


function Events() {
  const eventData: Event[] = [
    {
      id: 1,
      name: 'Music Festival Stockholm',
      category: { id: 1, name: 'music', img: "https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/Vito-Valentinetti-Way-Out-West-2018-24.jpg"},
      date: '2022-03-10',
      time: '15:00',
    },
    {
      id: 2,
      name: 'Music Festival Gothenburg',
      category: { id: 1, name: 'music', img: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Wayoutwestentrance.jpg" },
      date: '2022-04-10',
      time: '10:00',
    },
    {
      id: 3,
      name: 'The Walking Dead Season 50 Release Date',
      category: { id: 2, name: 'Movies', img: "https://phantom-marca.unidadeditorial.es/8a06a3abe5fcaebda6c9462c899d8ae9/resize/1320/f/jpg/assets/multimedia/imagenes/2021/08/10/16286161657414.jpg" },
      date: '2022-11-10',
      time: '19:00',
    },
    {
      id: 4,
      name: 'Fast & Furious 15 premiere',
      category: { id: 2, name: 'Movies', img: "https://external-preview.redd.it/lhe3DwrMN6uLgg4M1eoETdQM0g2tZiz2jVDY73v2rwM.jpg?auto=webp&s=54420b06f6fb9583da192ce7c734763a02a956fa" },
      date: '2022-12-05',
      time: '20:00',
    },
    {
      id: 5,
      name: 'LAN Event Stockholm',
      category: { id: 3, name: 'Gaming', img: "https://www.eslgaming.com/sites/default/files/styles/blog_big/public/LAN-Events-and-eSports-Header_0.jpg?itok=KYOzKqeI" },
      date: '2022-10-10',
      time: '15:00',
    },
    {
      id: 6,
      name: 'LAN Event Gothenburg',
      category: { id: 3, name: 'Gaming', img: "https://mb.cision.com/Public/18576/2880492/b9e71e1efaafd46e_800x800ar.jpg" },
      date: '2022-11-11',
      time: '15:00',
    },
    {
      id: 7,
      name: 'Art Museum Stockholm',
      category: { id: 4, name: 'Art', img: "https://static01.nyt.com/images/2021/09/02/arts/02museums-tour-1/merlin_193884324_93c3f30f-a61b-41b3-baaa-9260d21c5fc6-mobileMasterAt3x.jpg" },
      date: '2022-03-03',
      time: '11:00',
    },
    {
      id: 8,
      name: 'Art Museum Gothenburg',
      category: { id: 4, name: 'Art', img: "https://camstl.org/wp-content/uploads/2020/10/Shara-Hughes_Dusty-Kessler_038-scaled-1200x0-c-default.jpg" },
      date: '2022-04-04',
      time: '13:00',
    },
    {
      id: 9,
      name: 'Car Festival Stockholm',
      category: { id: 5, name: 'Cars', img: "https://driveracademy.se/wp-content/uploads/2019/02/Sthlm2-1030x656.jpg" },
      date: '2022-05-22',
      time: '13:00',
    },
    {
      id: 10,
      name: 'Car Festival Gothenburg',
      category: { id: 5, name: 'Cars', img: "https://www.elbilsverige.se/wp-content/uploads/2017/06/fdel061-1170x877.jpg" },
      date: '2022-08-21',
      time: '13:00',
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

const totalEvents = allEvents.filter(data => {
  return data.category.id 
})

console.log(totalEvents)

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
