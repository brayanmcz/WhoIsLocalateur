import React, { Component } from "react";
import { Iphone } from "../shared/iphone";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import styled from "styled-components";

const Wrapper = styled.div`
  .background {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    margin-top: -40vh;
    background-image: linear-gradient(
      10deg,
      #f4c44a,
      #f44336,
      #f44336,
      #f44336
    );
    transform: skewY(-5deg);
    /* z-index: -9; */
  }

  @media only screen and (max-width: 767px) {
    .background {
      margin-top: -10vh;
    }
  }

  @media only screen and (max-width: 767px) {
    .demo {
      transform: scale(0.5) !important;
    }
  }

  .foreground {
    padding-top: 60px;
  }

  .demo-container {
    text-align: center;
  }

  .demo {
    display: inline-block;
    transform: scale(0.8);
    text-align: center;
    margin: auto;
    margin-top: 25px;
  }

  .center {
    text-align: center;
  }
`;

class LandingSection extends Component {
  render() {
    return (
      <Wrapper>
        <div className="background" />
        <MDBContainer className="foreground" fluid>
          <MDBRow>
            <MDBCol md="6" className="text-container">
              <MDBRow>
                <MDBCol size="12" className="center">
                  Localateur
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol md="6" className="demo-container">
              <div className="demo">
                <Iphone />
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Wrapper>
    );
  }
}

export { LandingSection };
