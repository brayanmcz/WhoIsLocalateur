import React from 'react';
import { LandingSection } from './sections/landing';
import Navbar from './shared/navbar';
import styled from 'styled-components';

const Wrapper = styled.div`

`;

function App() {
  return (
    <Wrapper>
      <Navbar />
      <LandingSection />
    </Wrapper>
  );
}

export default App;
