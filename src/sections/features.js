import React, { Component } from 'react';
import styled from 'styled-components';
import { FeatureCardLeft, FeatureCardRight } from "../shared/feature-card";
import {
    MDBContainer,
    MDBRow,
    MDBCol
} from 'mdbreact';

const Wrapper = styled.div`
`;

class FeaturesSection extends Component {
    render() {
        return (
            <Wrapper>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol>
                            <FeatureCardLeft />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol>
                            <FeatureCardRight />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol>
                            <FeatureCardLeft />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol>
                            <FeatureCardRight />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </Wrapper>
        );
    }
};

export { FeaturesSection };