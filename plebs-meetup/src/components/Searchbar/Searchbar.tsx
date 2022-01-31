import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import device from "../../styles/mediaqueries";

const SearchInput = styled.input`
  border-radius: 6px;
  border: none;
  padding: 1.2em 1.3em;
  width: 70%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;


    
  ::placeholder {
    color: #8a8788cc;
 
  }

  @media${device.mobileL}{

  }
`;
const SearchDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1.2em;
  position:relative;
align-items:center;

`;

function Searchbar() {
  return (
    <>
      <SearchDiv>
      <SearchIcon style={{position:"absolute", marginRight:"-68.5%", fontSize:"25px", color:"lightgray",}}/>
        <SearchInput type="text" placeholder="Sök på aktivitet">
            
        </SearchInput>
      </SearchDiv>
    </>
  );
}

export default Searchbar;
