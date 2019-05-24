import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand } from "mdbreact";
import styled from "styled-components";

const Wrapper = styled.div`
  .lobster {
    font-family: "Lobster Two", cursive;
  }

  .no-shadow {
    box-shadow: 0 0 0 0 black;
  }
`;

class Navbar extends Component {
  render() {
    return (
      <Wrapper>
        <MDBNavbar
          scrolling
          transparent
          color="red"
          scrollingNavbarOffset={500}
          fixed="top"
          className="no-shadow"
          dark
          expand
        >
          <MDBNavbarBrand>
            <span className="lobster big">L</span>
          </MDBNavbarBrand>
        </MDBNavbar>
      </Wrapper>
    );
  }
}

export default Navbar;
