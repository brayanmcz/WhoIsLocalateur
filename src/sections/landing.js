import React, { Component } from 'react';
import { Iphone } from '../shared/iphone';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;

  .background{
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    margin-top: -20vh;
    background-image: linear-gradient(10deg, #f4c44a, #f44336, #f44336, #f44336);
    transform:skewY(-5deg);
    /* z-index: -9; */
  }

  @media only screen and (max-width: 767px) {
    .background{
    margin-top: -10vh;
  }
  }

  .foreground{
    padding-top: 60px;
  }

  .lobster{
    font-family: "Lobster Two", cursive;
  }

  .center {
    text-align: center;
  }

  .title{
    font-size: calc(3vw + 40px);
  }

  .subtitle{
    margin-top: -10px;
    font-size: calc(0.5vw + 10px);
  }

  .description-container{
    max-width: 400px;
    text-align: center;
    margin: auto;
  }
`;

class LandingSection extends Component {
  render(){
    return(
      <Wrapper>
        <div className="background" />
        <MDBContainer className="foreground" fluid>
          <MDBRow>
            <MDBCol md="6" className="center">
              <span className="title lobster text-white">Localateur</span>
              <p className="subtitle text-white">New Customers Discovering You</p>
              <div className="description-container">
                <p className="description text-white">
                  Increase your discoverability, target market, 
                  and quality of customer relations. We are
                  building a platform promoting experience
                  sharing between you and your customers
                  for a more personalized and enjoyable experience.
                </p>
              </div>
            </MDBCol>
            <MDBCol md="6" className="center">
              <Iphone className="phone"/>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Wrapper>
    );
  }
}

export { LandingSection };