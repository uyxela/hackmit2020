import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #83D86F;
    padding: 15vh 0 15vh 0;
`;

const ComponentContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const AboutTitle = styled.h1`
    color: white;
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 20px;
`;

const AboutDescription = styled.p`
    color: white;
    font-size: 1.75rem;
    text-align: justify;
    text-justify: auto;
`;

const AboutSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    margin: 5% 0 5% 0;
`;

const AboutItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const AboutImage = styled.img`

`;

const AboutName = styled.h2`
    color: white;
    font-size: 3rem;
`;

const AboutBio = styled.h3`
    color: white;
    font-size: 2.25rem;
`;

function About() {
    return (
        <AboutContainer>
            <ComponentContainer>
                <AboutTitle>About Green Machine</AboutTitle>
                <AboutDescription>Green Machine is a tool that lets you visualize the environmental impact of computations. Whether it be the carbon output equivalent of your machine learning models or comparisons of the world's leading supercomputers, Green Machine's goal is to help put these numbers into a perspective that's easier to understand and comprehend by everyone. We hope to raise awareness and help people make more sustainable choices for their high performance computing needs.</AboutDescription>
                <br />
                <br />
                <AboutDescription>Green Machine is a project built for the HackMIT Green Compute Challenge and has been developed by:</AboutDescription>
                <AboutSection>
                    <AboutItem>
                        <AboutImage />
                        <AboutName>Alex Yu</AboutName>
                        <AboutBio>One liner</AboutBio>
                    </AboutItem>
                    <AboutItem>
                        <AboutImage />
                        <AboutName>Alex Yu</AboutName>
                        <AboutBio>One liner</AboutBio>
                    </AboutItem>
                    <AboutItem>
                        <AboutImage />
                        <AboutName>Alex Yu</AboutName>
                        <AboutBio>One liner</AboutBio>
                    </AboutItem>
                </AboutSection>
                <AboutDescription>Through Green Machine we hope to make the future of computation more environmentally friendly!</AboutDescription>
            </ComponentContainer>
        </AboutContainer>
    )
}

export default About;