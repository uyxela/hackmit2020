import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Inputs from './inputs';
import Results from './results';
import Visualization from './visualization';

const CalculateComponentContainer = styled.div`
    background-color: white;
    border-radius: 25px;
    width: 70%;
    height: 70%;
    min-width: 300px;
    min-height: 400px;
    align-self: center;
    margin: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function CalculateComponent(props) {
    const [currentComponent, setCurrentComponent] = useState(Inputs);
    
    useEffect(() => {
        if (props.step === 1) {
            setCurrentComponent(<Inputs setStep={props.setStep} />);
        } else if (props.step === 2) {
            setCurrentComponent(<Results setStep={props.setStep} />);
        } else if (props.step === 3) {
            setCurrentComponent(<Visualization setStep={props.setStep} />);
        }
    }, [props])

    return (
        <CalculateComponentContainer>
            {currentComponent}
        </CalculateComponentContainer>
    )
}

export default CalculateComponent;