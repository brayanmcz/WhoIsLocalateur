import React from "react";
import { LandingSection } from "./sections/landing";
import { FeaturesSection } from "./sections/features";
import Navbar from "./shared/navbar";
import styled from "styled-components";

const Wrapper = styled.div`
  overflow-x: hidden !important;

  .seperator {
    height: 150px;
  }
`;

function App() {
  return (
    <Wrapper>
      <Navbar />
      <LandingSection />
      <div className="seperator" />
      <FeaturesSection />
    </Wrapper>
  );
}

export default App;
