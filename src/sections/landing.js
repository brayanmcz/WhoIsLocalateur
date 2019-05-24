import React, { Component } from "react";
import { Iphone } from "../shared/iphone";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import styled from "styled-components";

const Wrapper = styled.div`
  .background {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    margin-top: -40vh;
    background-image: linear-gradient(5deg, #f4c44a, #f44336, #f44336, #f44336);
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
      transform: scale(0.6) !important;
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
  }

  .center {
    text-align: center;
  }

  .text-white {
    color: white;
  }

  .lobster {
    font-family: "Lobster Two", cursive;
  }

  .bold {
    font-weight: 600;
  }

  .title {
    font-size: 70px;
  }

  .sub-title {
    font-size: 28px;
    margin-top: -20px;
    margin-left: 5px;
  }

  .sub-text {
    font-size: 14px;
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
                <MDBCol size="12" className="center text-white title">
                  <span className="lobster"> Localateur</span>
                </MDBCol>
                <MDBCol size="12" className="center text-white sub-title">
                  <span className="">For Business Owners</span>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol className="center text-white mt-2">
                  A New, Simple, and Effective way to Maximize your customer
                  outreach.
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol size="12" className="center mt-3 mb-5">
                  <MDBBtn color="elegant" size="lg">
                    SIGN UP FOR FREE
                  </MDBBtn>
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
