import React, { useState } from 'react';

import './App.css';
import BaseModalWrapper from './components/Modal/BaseModalWrapper';

function App() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };
  return (
    <div className='App'>
      <button onClick={toggleModal}>Show modal test</button>
      <BaseModalWrapper
        isModalVisible={isModalVisible}
        onBackdropClick={toggleModal}
      />
    </div>
  );
}

export default App;
