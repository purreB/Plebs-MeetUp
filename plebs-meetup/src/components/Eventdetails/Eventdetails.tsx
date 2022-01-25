import { Avatar } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import bgdetails from "../../styles/bgdetails.png"
import device from '../../styles/mediaqueries'
import { useParams } from "react-router-dom" 

const Container = styled.div`
background-color: #FA9270;
position:relative;
background-position:cover;
height:100vh;
font-family:${device.primaryFont};

@media${device.mobileL}{
  background-image:url(${bgdetails});
background-repeat:no-repeat;
height:100vh;
background-position-y: 38%;
}
`
const HeaderText = styled.h2`
margin:0;
margin-left:1em;
font-size:1.8em;
padding-top:0.3em;

color:#fff;
`


const Ptext = styled.p`
font-size:1em;

color:#fff;
padding:0 30px;
margin:0;
padding-top:2em;
`
const Ptextsmall = styled.p`
font-size:1em;
line-height:1.2em;
color:#fff;
padding:0 30px;
margin:0;
padding-top:2em;
`


const Ptextwhite = styled.p`
font-size:1em;
line-height:1.2em;
color:#333;
padding:0 30px;
font-weight:600;
margin:0;
padding-top:0.2em;
`

const Maindiv = styled.div`
margin-top:8em;

z-index:3;
`

const MessagesContainer = styled.div`
    width:100%;
    margin-top:1.5em;
    display:flex;
    justify-content:center;
    align-items:center;
`
const Messagesdiv = styled.div`
    width:90%;
    margin-top:1.5em;
    border-radius:6px;
    display:flex;
    align-items: center;
    justify-content: center;
    
`

const HeaderTextWhite = styled.h2`
margin:0;

font-size:1.8em;
text-align:center;

color:#333;
`

const StyledUl = styled.ul`
list-style-type:none;
display:flex;
flex-direction:column;
`

const StyledList = styled.li`
border:0.1px solid #e2e2e234;
border-radius:6px;
width:85%;
max-width:280px;
display:flex;
flex-wrap:wrap;
align-items:center;
margin-bottom:1.5em;
`

const CommentDiv = styled.div`
display:flex;

`

const CommentP = styled.p`
margin:0;
padding:0;
margin-top:0.5em;
padding-left:0.5em;
`

const Namep = styled.p`
margin:0;
padding:0;
font-weight:600;
padding-left:0.5em;
`


function Eventdetails() {

    let { id } = useParams<{id: string}>();
    console.log("id är", id)
    return (
       <Container>
           <Ptext>Event detaljer</Ptext>
           <HeaderText>Music Festival Stockholm</HeaderText>
           <Ptextsmall>Plats</Ptextsmall>
           <Ptextsmall style={{paddingTop:"0.2em", fontWeight:"600", fontSize:""}}>Stockholm, Östermalm </Ptextsmall>

           <Maindiv>
        <Ptextwhite style={{fontSize:"1.4em"}}>Datum & Tid</Ptextwhite>
        <Ptextwhite style={{paddingTop:"1em"}}>2022-03-10</Ptextwhite>
        <Ptextwhite>15:00</Ptextwhite>
<MessagesContainer>
    <Messagesdiv>
    <HeaderTextWhite>Kommentarer</HeaderTextWhite>
    </Messagesdiv>
    
</MessagesContainer>
        <StyledUl> 
            <StyledList>
                <Avatar  sx={{ width: 32, height: 32 }}>L</Avatar>
                <Namep>Lars Håkansson</Namep>
                <Namep style={{fontWeight:"400"}}>22:34</Namep>
                <CommentDiv>
                    <CommentP>Helt jävla taggad på den här skiten!</CommentP>
                </CommentDiv>
            </StyledList>

            <StyledList>
                <Avatar  sx={{ width: 32, height: 32 }}>A</Avatar>
                <Namep>Abdi Hussein</Namep>
                <Namep style={{fontWeight:"400"}}>14:08</Namep>
                <CommentDiv>
                    <CommentP>:kekW: :monkaS:</CommentP>
                </CommentDiv>
            </StyledList>

            <StyledList>
                <Avatar  sx={{ width: 32, height: 32 }}>P</Avatar>
                <Namep>Pernilla Loefgren</Namep>
                <Namep style={{fontWeight:"400"}}>09:58</Namep>
                <CommentDiv>
                    <CommentP>Usch så tråkigt, vem lyssnar på musik</CommentP>
                </CommentDiv>
            </StyledList>
            
        </StyledUl>
           </Maindiv>
       </Container>
    )
}

export default Eventdetails
