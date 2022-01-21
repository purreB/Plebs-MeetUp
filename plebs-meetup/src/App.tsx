import React from 'react';
import styled from 'styled-components';
import Landing from './Components/Landing/Landing';

import GlobalStyle from "./styles/Globalstyle"

const AppContainer = styled.div`
`

function App() {
  return (
    <AppContainer>
      <GlobalStyle/>
      <Landing />
    </AppContainer>
    
  );
}

export default App;
