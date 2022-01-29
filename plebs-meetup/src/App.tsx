import React from 'react';
import { motion } from 'framer-motion';

import './App.css';
import styled from 'styled-components';
import Landing from './components/Landing/Landing';

const AppContainer = styled(motion.div)``;

function App() {
  return (
    <AppContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Landing />
    </AppContainer>
  );
}

export default App;
