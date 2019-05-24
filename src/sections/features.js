import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 350px;
  width: 100vw;

  .center {
    text-align: center;
  }
`;

class Features extends Component {
  render() {
    return (
      <Wrapper>
        <MDBContainer>
          <div className="text-center my-5">
            <MDBRow>
              <MDBCol md="4">
                <MDBIcon icon="chart-line" size="3x" className="orange-text" />
                <h5 className="font-weight-bold my-4">Analytics</h5>
                <p className="grey-text mb-md-0 mb-5">
                  Making effective decisions require plenty of thought. We make
                  decision making easy by providing you with data that will
                  impact the way you grow your business.
                </p>
              </MDBCol>
              <MDBCol md="4">
                <MDBIcon icon="book" size="3x" className="orange-text" />
                <h5 className="font-weight-bold my-4">Tutorials</h5>
                <p className="grey-text mb-md-0 mb-5">
                  We will provide you with the resources to learn our platform
                  fast, so you can return to doing what you do best.
                </p>
              </MDBCol>
              <MDBCol md="4">
                <MDBIcon
                  far
                  icon="comments"
                  size="3x"
                  className="orange-text"
                />
                <h5 className="font-weight-bold my-4">Support</h5>
                <p className="grey-text mb-md-0 mb-5">
                  We only succeed when you do. We promise to give you top tier
                  support so you can worry less about working with the app and
                  focus more on building your business.
                </p>
              </MDBCol>
            </MDBRow>
          </div>
        </MDBContainer>
      </Wrapper>
    );
  }
}

export default Features;
