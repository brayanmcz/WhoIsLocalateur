import React, { Component } from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol
} from 'mdbreact';
import styled from 'styled-components';

const Wrapper = styled.div`
    // height: 300px;
    margin-top: 25px;
    margin-bottom: 100px;
    margin-left: 15px;
    margin-right: 15px;

    .image-container {
        height: 300px;
        padding: 0px;
        text-align: center;
    }

    .image {
        border-radius: 5px;
        width: 90%;
        height: 300px;
        object-fit: cover;
        margin-top: auto;
        margin-bottom: auto;
        box-shadow: 2px 5px 7px 3px lightgrey;
    }

    .title {
        font-size: 28px !important;
        font-weight: 800 !important;
        color: #686868 !important;
        font-family: Impact !important;
        margin-top: 15% !important;
    }

    .text {
        font-family: Franklin Gothic Medium;
        font-size: 18px;
        margin-top: 10px;
        margin-left: auto;
        margin-right: auto;
        max-width: 500px;
        text-align: center;
        font-weight: 600;
        color: #9e9c9c;
    }

    .right {
        box-shadow: -2px 5px 7px 3px lightgrey !important;
    }
`;

export class FeatureCardLeft extends Component {
    render() {
        return (
            <Wrapper>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol size="12" sm="4" className="image-container">
                            <img className="image" src="https://cdn-image.foodandwine.com/sites/default/files/1501607996/opentable-scenic-restaurants-marine-room-FT-BLOG0818.jpg" />
                        </MDBCol>
                        <MDBCol size="12" sm="8">
                            <MDBRow className="title text">
                                <MDBCol>
                                    TELL YOUR STORY
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="text">
                                <MDBCol>
                                    Share your origins and journeys with the world, and teach customers about your culture!
                                    Le quoi de la meme, once upon a time there was a toaster,
                                    he did not like mems very much, bubt one day he encountered a wild wasp.
                                </MDBCol>
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
                    <MDBCol size="12" sm="8">
                            <MDBRow className="title text">
                                <MDBCol>
                                    TELL YOUR STORY
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="text">
                                <MDBCol>
                                    Share your origins and journeys with the world, and teach customers about your culture!
                                    Le quoi de la meme, once upon a time there was a toaster,
                                    he did not like mems very much, bubt one day he encountered a wild wasp.
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                        <MDBCol size="12" sm="4" className="image-container">
                            <img className="image right" src="https://cdn-image.foodandwine.com/sites/default/files/1501607996/opentable-scenic-restaurants-marine-room-FT-BLOG0818.jpg" />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </Wrapper>
        );
    }
}