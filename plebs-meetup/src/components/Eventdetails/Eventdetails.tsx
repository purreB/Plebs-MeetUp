import { Avatar, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import bgdetails from "../../styles/bgdetails.png";
import device from "../../styles/mediaqueries";
import { useParams } from "react-router-dom";
import { Event } from "../../models/Event";
import { eventData } from "../../models/Event";
import { nanoid } from "nanoid";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import { Comments } from '../../models/Comments';


const Container = styled.div`
  background-color: #fa9270;
  position: relative;
  background-position: cover;
  height: 100vh;
  font-family: ${device.primaryFont};

  @media${device.tablet} {
    background-image: url(${bgdetails});
    background-repeat: no-repeat;
    
    background-position-y: 36%;
  }

  @media${device.mobileM} {
    background-image: url(${bgdetails});
    background-repeat: no-repeat;
    height: 100vh;
    background-position-y: 34%;
  }
`;
const HeaderText = styled.h2`
  margin: 0;
  margin-left: 1em;
  font-size: 1.8em;
  padding-top: 0.3em;

  color: #fff;
`;

const Ptext = styled.p`
  font-size: 1em;

  color: #fff;
  padding: 0 30px;
  margin: 0;
  padding-top: 2em;
`;
const Ptextsmall = styled.p`
  font-size: 1em;
  line-height: 1.2em;
  color: #fff;
  padding: 0 30px;
  margin: 0;
  padding-top: 2em;
`;

const Ptextwhite = styled.p`
  font-size: 1em;
  line-height: 1.2em;
  color: #333;
  padding: 0 30px;
  font-weight: 600;
  margin: 0;
  padding-top: 0.2em;
`;

const Maindiv = styled.div`
  margin-top: 8em;

  z-index: 3;
`;

const MessagesContainer = styled.div`
  width: 100%;
  margin-top: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Messagesdiv = styled.div`
  width: 90%;
  margin-top: 1.5em;
  border-radius: 6px;
  display: flex;

  @media${device.tablet} {
    align-items: center;
    justify-content: center;
  }
`;

const HeaderTextWhite = styled.h2`
  margin: 0;

  font-size: 1.8em;
  text-align: center;

  color: #333;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  
  @media${device.tablet} {
    justify-content: center;
    padding: 0;
    align-items: center;
  }
`;

const StyledList = styled.li`
background-color:#c0c4c158;
  border-radius: 6px;
  width: 85%;
  max-width: 280px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 1.5em;
  padding:1em;
`;

const CommentDiv = styled.div`
  display: flex;
  
`;

const CommentP = styled.p`
  margin: 0;
  padding: 0;
  margin-top: 0.5em;
  padding-left: 0.5em;
`;

const Namep = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 600;
  padding-left: 0.5em;
`;

const WriteDiv = styled.div`

`;

function Eventdetails() {
  let { id } = useParams<{ id: string }>();
  let numberId = Number(id);

  let today = new Date();
  const theMonth = today.getMonth() <= 0 ? "1" : today.getMonth();

const dateOfPost = `${today.getDay()}/${theMonth}/${today.getFullYear()}`



  let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
 
  const [theComment, setTheComment] = useState<string>("");
  const [postedByName, setPostedByName] = useState<string>("Anonymous");
  const [events, setEvents] = useState<Event[]>(eventData);

  // Initial check
  let localstorageData: Event[] = JSON.parse(localStorage.getItem("User")!);


  

  function addComment(idOfEvent: number, comment: string, postedByName: string) {
    setTheComment("")
    setPostedByName("")
    const newComment: Comments = {
      postedByName,
      eventID: idOfEvent,
      posted: time + " " + " " + + " " + dateOfPost,
      comments: [comment],
    };

    for (let i = 0; i < localstorageData.length; i++) {
      if (localstorageData[i].id == idOfEvent) {
        console.log(events)
        localstorageData[i].comments?.push(newComment);
        
        console.log("events", events)
        console.log("eventData", localstorageData)
        setEvents(localstorageData)
       
      }
    }
    // setEvents(localstorageData)
    localStorage.setItem("User", JSON.stringify(localstorageData))
    

    const comments = eventData.filter((data) => {
      return data.id == idOfEvent;
    })[0].comments;

    const testAll = comments.map((data) => {
      return data.comments;
    });


  }

  const filteredDetails = localstorageData.filter((data: any) => {
    return data.id == numberId;
  })[0];


const messageData = filteredDetails.comments.map((data: Comments, index) => {
  return(
    <StyledList key={index}>
    <Avatar sx={{ width: 32, height: 32 }}>{data.postedByName?.charAt(0).toUpperCase()}</Avatar>
    <CommentDiv>
    <Namep>{data.postedByName}</Namep>
    <Namep style={{ fontWeight: "400" }}>{data.posted}</Namep>
    </CommentDiv>

    <CommentDiv style={{width:"90%", marginTop:"0.1em"}}>
      <CommentP>{data.comments}</CommentP>
      
    </CommentDiv>
  </StyledList>
  )
})




const mapish = events.filter((data) => {
  return data.id == numberId;
})[0];



  return (
    <Container>
      <Ptext>Event detaljer</Ptext>
      <HeaderText>{filteredDetails.name}</HeaderText>
      <Ptextsmall>Plats</Ptextsmall>
      <Ptextsmall
        style={{ paddingTop: "0.2em", fontWeight: "600", fontSize: "" }}
      >
        {filteredDetails.plats}
      </Ptextsmall>

      <Maindiv>
        <Ptextwhite style={{ fontSize: "1.4em" }}>Datum & Tid</Ptextwhite>
        <Ptextwhite style={{ paddingTop: "1em" }}>
          {filteredDetails.date}
        </Ptextwhite>
        <Ptextwhite>{filteredDetails.time}</Ptextwhite>
        <MessagesContainer>
          <Messagesdiv>
            <HeaderTextWhite>Kommentarer</HeaderTextWhite>
          </Messagesdiv>
        </MessagesContainer>
        <StyledUl>
      {messageData}
        </StyledUl>
        <WriteDiv>
          <form style={{margin:"0", padding:"0", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column",}} onSubmit={() => addComment(numberId, theComment.trim(), postedByName)}>
          <TextField
            onChange={(e) => setPostedByName(e.target.value)}
            id="outlined-basic"
            label="Namn"
            type="text"
            required
            variant="outlined"
            size="small"
            value={postedByName}
            style={{ marginBottom: "0.3em", width: "90%", maxWidth: "290px" }}
          />
          <TextField
          required
            id="outlined-textarea"
            label="Kommentar..."
            value={theComment}
            placeholder="Skriv din kommentar här"
            rows={3}
            type="text"
            multiline
            onChange={(e) => setTheComment(e.target.value)}
            style={{ width: "90%", maxWidth: "290px", marginTop:"0.5em" }}
          />
          <Button
            variant="contained"
            style={{
              width: "85%",
              maxWidth: "282px",
              marginTop: "1em",
              marginBottom: "2em",
            }}
            size="medium"
            endIcon={<SendIcon />}
            onClick={() => addComment(numberId, theComment.trim(), postedByName)}
          >
            Kommentera
          </Button>
          </form>
        </WriteDiv>
      </Maindiv>
    </Container>
  );
}

export default Eventdetails;
