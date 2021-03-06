import React from 'react';
import styled from 'styled-components';
import Categories from '../Category/Categories';
import device from '../../styles/mediaqueries';
import bgpic from '../../styles/bgtest.png';
import Searchbar from '../Searchbar/Searchbar';
import { motion } from 'framer-motion';

const Container = styled.div`
  background-color: #e06e48;
  display: flex;

  flex-direction: column;
  height: 100vh;
  background-position: top;
  @media${device.mobileL} {
    background-image: url(${bgpic});
    background-repeat: no-repeat;
    height: 100vh;
    background-position-y: 69%;
  }
  font-family: ${device.primaryFont};
`;

const HeaderText = styled.h2`
  margin: 0;
  padding-top: 3em;
  font-size: 1.6em;
  text-align: center;

  color: #fff;
`;

const Ptext = styled.p`
  font-size: 1em;
  color: #fff;
  padding: 0 30px;
`;
const Pdiv = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
  line-height: 1.3em;
`;

function Landing() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <HeaderText>Vad letar du efter?</HeaderText>
        <Pdiv>
          <Ptext>
            Hitta ett event, låt dig inspireras av vad som händer just nu eller
            sök efter dina intressen!
          </Ptext>
        </Pdiv>
      </motion.div>
      <Searchbar />

      <Categories />
    </Container>
  );
}

export default Landing;
