import React from "react";
import styled from "styled-components";

import large1 from "../assets/images/large1.svg";
import large2 from "../assets/images/large2.svg";
//import large3 from "../assets/images/large3.svg";
//import large4 from "../assets/images/large4.svg";
//import large5 from "../assets/images/large5.svg";
//import large6 from "../assets/images/large6.svg";

const LearnContainer = styled.div`
    height: 90vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: #83d86f;
    overflow: hidden;
`;

const PageContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;
`;

const LearnTitle = styled.h1`
    color: white;
    font-size: 5rem;
    font-weight: bold;
    margin: 50px;
`;

const LearnLeftHeader = styled.h1`
    color: white;
    font-size: 5rem;
    font-weight: bold;
    margin: 20px;
`;

const LearnText = styled.p`
    color: white;
    font-size: 1-rem;
    font-weight: 
`;

const LearnImage = styled.img`
    width: 40%;
    max-width: 1000px;
    margin: 50px;
`;

function Learn() {
    return (
        <LearnContainer>
            <PageContainer>
                <LearnTitle>
                    What YOUR Data Means!
                </LearnTitle>
                <LearnImage src={large1} />
            </PageContainer>
            <PageContainer>
                <LearnImage src={large2} />
                <LearnTitle>
                    CO2 & Friends?
                </LearnTitle>
            </PageContainer>
        </LearnContainer>
    )
}

export default Learn;