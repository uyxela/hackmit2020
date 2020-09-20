import React from "react";
import styled from "styled-components";

import imageSrc from '../assets/images/environment.svg';

const HomeContainer = styled.div`
    height: 90vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: #83D86F;
`;

const HomeTitleContainer = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
`;

const HomeTitle = styled.h1`
    color: white;
    font-size: 4rem;
    font-weight: bold;
    margin: 20px;
`;

const Sub = styled.sub`
    vertical-align: sub;
    font-size: smaller;
`;

const HomeButton = styled.button`
    border: none;
    background-color: #45AA29;
    padding: 20px 30px 20px 30px;
    margin: 20px;
    color: white;
    font-size: 2rem;
    font-family: Quicksand, sans-serif;
    border-radius: 100px;
    align-self: center;
    cursor: pointer;
`;

const HomeDescription = styled.p`
    color: white;
    font-size: 1.5rem;
    margin: 0 0 40px 20px;
    width: 70%;
`;

const HomeImage = styled.img`
    width: 40%;
    max-width: 500px;
`;

function Home() {
    return (
        <HomeContainer>
            <HomeTitleContainer>
                <HomeTitle>Green Machine - CO<Sub>2</Sub> Calculator</HomeTitle>
                <HomeDescription>Green Machine is a web app that helps you calculate the carbon impact of your computations through fun and interactive visualizations.</HomeDescription>
                <HomeButton onClick={() => window.location.replace("/calculate")}>Find My Impact</HomeButton>
            </HomeTitleContainer>
            <HomeImage src={imageSrc} />
        </HomeContainer>
    )
}

export default Home;