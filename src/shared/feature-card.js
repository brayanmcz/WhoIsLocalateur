import React, { Component } from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol
} from 'mdbreact';
import styled from 'styled-components';

const Wrapper = styled.div`
    // height: 150px;
    margin-bottom: 50px;
    margin-left: 15px;
    margin-right: 15px;

    .image-container-left {
        height: 150px;
        padding: 0px;
    }

    .image-container-right {
        height: 150px;
        padding: 0px;
        text-align: right;
    }

    .image {
        // border: 1px solid black;
        border-radius: 5px;
        width: 90%;
        height: 100%;
        box-shadow: 2px 5px 7px 3px lightgrey;
    }

    .title {
        font-size: 22px;
        font-weight: bold;
    }
`;

export class FeatureCardLeft extends Component {
    render() {
        return (
            <Wrapper>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol size="12" sm="3" className="image-container-left">
                            <img className="image" src="https://cdn-image.foodandwine.com/sites/default/files/1501607996/opentable-scenic-restaurants-marine-room-FT-BLOG0818.jpg" />
                        </MDBCol>
                        <MDBCol size="12" sm="9">
                            <MDBRow className="title">
                                TELL YOUR STORY
                            </MDBRow>
                            <MDBRow clasName="text">
                                Share your origins and journeys with the world, and teach customers about your culture!
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </Wrapper>
        );
    }
}

export class FeatureCardRight extends Component {
    render() {
        return (
            <Wrapper>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol size="12" sm="9">
                            <MDBRow className="title">
                                TELL YOUR STORY
                            </MDBRow>
                            <MDBRow className="text">
                                Share your origins and journeys with the world, and teach customers about your culture!
                            </MDBRow>
                        </MDBCol>
                        <MDBCol size="12" sm="3" className="image-container-right">
                            <img className="image" src="https://cdn-image.foodandwine.com/sites/default/files/1501607996/opentable-scenic-restaurants-marine-room-FT-BLOG0818.jpg" />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </Wrapper>
        );
    }
}