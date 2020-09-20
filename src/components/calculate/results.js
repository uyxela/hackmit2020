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

const ResultsDescription = styled.h2`
  font-weight: medium;
  font-size: 1.5rem;
  margin: 10px 40px 10px 40px;
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
            <br />
            <br />
            <ResultsTitle>Ways you might be able to reduce your carbon impact.</ResultsTitle>
            <ResultsDescription>Consider the <a href="https://en.wikipedia.org/wiki/Power_usage_effectiveness .">Power Usage Efficiency (PUE)</a> of your datacenter.</ResultsDescription>
            <ResultsDescription>Consider the <a href="https://www.sciencedirect.com/science/article/pii/S2214629616302985?via%3Dihub">time of day</a> you are running your computations.</ResultsDescription>
            <ResultsDescription>Consider the <a href="https://www.ibm.com/blogs/nordic-msp/iceland-data-centers/">location of the datacenter</a>, data centers typically need more cooling energy when it's hot and humid.</ResultsDescription>
        </>
    )
}

export default Results;