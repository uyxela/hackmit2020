import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { withprovider, withee } from '../logic';

const ResultsTitle = styled.h2`
    font-weight: bold;
    font-size: 1.5rem;
`;

const ResultsButton = styled.button`
    border: none;
    padding: 20px;
    border-radius: 25px;
    background-color: #45AA29;
    color: white;
    font-family: Quicksand, sans-serif;
    font-weight: medium;
    font-size: 1.25rem;
`;

const ResultsSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ResultsName = styled.h4`
    font-size: 1.5rem;
`;

const ResultsValue = styled.h3`
    font-size: 3rem;
    color: #45AA29;
`;

const Sub = styled.sub`
  vertical-align: sub;
  font-size: smaller;
`;

function Results(props) {
    const [conversionData, setConversionData] = useState(null);

    useEffect(() => {
        const inputData = JSON.parse(window.localStorage.getItem('calculateData'));
        if (inputData.provider === 'Private Infrastructure') {
            setConversionData(withee(inputData.gpu, inputData.hours, inputData.efficiency, inputData.model));
        } else {
            setConversionData(withprovider(inputData.gpu, inputData.hours, inputData.provider, inputData.region, inputData.model))
        }
    }, []);

    return (
        <>
            <ResultsTitle>The amount of carbon emitted by running a machine learning model on your configuration.</ResultsTitle>
            <ResultsSection>
                <ResultsName>Carbon Emitted (kg CO<Sub>2</Sub> equivalent)</ResultsName>
                <ResultsValue>{conversionData && Math.round(conversionData.carbon * 100) / 100}</ResultsValue>
            </ResultsSection>
            <ResultsButton onClick={() => { props.setStep(3) }}>Visualize this data</ResultsButton>
        </>
    )
}

export default Results;