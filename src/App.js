import React from "react";
import { LandingSection } from "./sections/landing";
import Navbar from "./shared/navbar";
import { FeatureCardLeft, FeatureCardRight } from "./shared/feature-card";
import styled from "styled-components";

const Wrapper = styled.div`
  overflow-x: hidden !important;
`;

function App() {
  return (
    <Wrapper>
      <Navbar />
      <LandingSection />
      <FeatureCardLeft />
      <FeatureCardRight />
      <FeatureCardLeft />
      <FeatureCardRight />
    </Wrapper>
  );
}

export default App;
