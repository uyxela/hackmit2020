import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Inputs from './inputs';
import Results from './results';
import Visualization from './visualization';

const CalculateComponentContainer = styled.div`
    background-color: white;
    border-radius: 25px;
    width: 90%;
    height: 70%;
    min-width: 300px;
    min-height: 400px;
    align-self: center;
    margin: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

function CalculateComponent(props) {
    return (
        <CalculateComponentContainer>
            {props.step === 1 ? <Inputs setStep={props.setStep} /> : null}
            {props.step === 2 ? <Results setStep={props.setStep} /> : null}
            {props.step === 3 ? <Visualization setStep={props.setStep} /> : null}
        </CalculateComponentContainer>
    )
}

export default CalculateComponent;