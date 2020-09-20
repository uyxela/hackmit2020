import React, { useState } from "react";
import styled from "styled-components";
import CalculateComponent from './calculateComponent';

const CalculateContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #83D86F;
    min-height: 70vh;
    padding: 10vh 0 10vh 0;
`;

const ComponentContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const CalculateTitle = styled.h1`
    color: white;
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 20px;
`;

const CalculateDescription = styled.p`
    color: white;
    font-size: 1.75rem;
    text-align: justify;
    text-justify: auto;
`;

function Calculate() {
    const [step, setStep] = useState(1);

    return (
        <CalculateContainer>
            <ComponentContainer>
                <CalculateTitle>Calculate Your Impact</CalculateTitle>
                <CalculateDescription>Find the carbon impact of your machine learning model computations by indicating indicating relevant configuration options.</CalculateDescription>
                <CalculateComponent step={step} setStep={setStep} />
            </ComponentContainer>
        </CalculateContainer>
    )
}

export default Calculate;