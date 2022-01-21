import React, { useState } from 'react';

import './App.css';
import BaseModalWrapper from './components/Modal/BaseModalWrapper';

import styled from 'styled-components';
import Landing from './components/Landing/Landing';

import GlobalStyle from './styles/Globalstyle';

const AppContainer = styled.div``;

function App() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };
  return (
    <AppContainer>
      <button onClick={toggleModal}>Show modal test</button>
      <BaseModalWrapper
        isModalVisible={isModalVisible}
        onBackdropClick={toggleModal}
      />
      <GlobalStyle />

      <Landing />
    </AppContainer>
  );
}

export default App;
