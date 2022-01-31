import React, { useState, useEffect} from 'react'
import styled from "styled-components"
import Categories from '../Category/Categories'
import Events from '../Events/Events'
import device from '../../styles/mediaqueries'
import bgpic from "../../styles/bgtest.png"
import Searchbar from '../Searchbar/Searchbar'
import bgdesktop from "../../styles/bgdesktop.png"
import { eventData } from '../../models/Event'
import { nanoid } from 'nanoid'

const Container = styled.div`
background-color: #FA9270;
display:flex;
flex-direction:column;
background-position:top;
@media${device.mobileL}{
  background-image:url(${bgpic});
background-repeat:no-repeat;
height:100vh;
background-position-y: 61%;
}
font-family:${device.primaryFont};

@media${device.mobileM}{
  background-image:url(${bgpic});
background-repeat:no-repeat;
height:100vh;
background-position-y: 50%;
}

@media${device.mobileS}{
  background-image:url(${bgpic});
background-repeat:no-repeat;
height:100vh;
background-position-y: 38%;
}

`

const HeaderText = styled.h2`
margin:0;
padding-top:3em;
font-size:1.6em;
text-align:center;

color:#fff;
`


const Ptext = styled.p`
font-size:1em;
color:#fff;
padding:0 30px;

`
const Pdiv = styled.div`
justify-content:center;
display:flex;
width:100%;
line-height:1.3em;
`



function Landing() {

  const [events, setEvents] = useState<any>(eventData);

  console.log(events)

  const User = {
    id: nanoid(),
    name: nanoid(),
    favorite: undefined,
    event: undefined,
  };

  console.log(User)
  
  function initialFetch(){
  const checkLocalStorage = localStorage.getItem("User");
  if(!checkLocalStorage){
    localStorage.setItem("User", JSON.stringify([...events, User]))
  }
  else{
    JSON.parse(localStorage.getItem("User")!)
  }
  }

  useEffect(() => {
    initialFetch()
  }, [])

    return (
      <Container>
        <HeaderText>Vad letar du efter?</HeaderText>
        <Pdiv><Ptext>Hitta ett event, låt dig inspireras av vad som händer just nu eller sök efter dina intressen!</Ptext></Pdiv>
       <Searchbar/>
       
          <Categories/>
         <Events />
      </Container>
    )
}

export default Landing
