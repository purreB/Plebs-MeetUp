import React, { useState } from "react";

import "./App.css";
import BaseModalWrapper from "./components/Modal/BaseModalWrapper";
import styled from 'styled-components';
import Landing from './components/Landing/Landing';

import GlobalStyle from './styles/Globalstyle';
import Events from './components/Events/Events';
import Categories from './components/Category/Categories';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Eventdetails from "./components/Eventdetails/Eventdetails";

const AppContainer = styled.div``;

function App() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };
  return (
    <Router>
      <Switch>
    <AppContainer>
      {/* <button onClick={toggleModal}>Show modal test</button>
      <BaseModalWrapper
        isModalVisible={isModalVisible}
        onBackdropClick={toggleModal}
      /> */}
      <GlobalStyle />

      <Route exact path="/">
      <Landing />
      </Route>
      
      <Route  path="/eventdetails">
        <Eventdetails/>
      </Route>
      
        <Route path="/event/:id">
          <Eventdetails/> 
        </Route>
    
      {/* <Categories />{' '} */}
      {/*Categories and events are just here for testing purposes */}
      {/* <Events /> */}
    </AppContainer>
    </Switch>
    </Router>
  );
}

export default App;
