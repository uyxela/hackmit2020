import React, { useState } from 'react';
import styled from 'styled-components';
import models from '../../data/models.json';
import gpus from '../../data/gpus.json';
import sources from '../../data/sources.json';

const InputsTitle = styled.h2`
    font-weight: bold;
    font-size: 1.5rem;
`;

const InputsForm = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const InputsButton = styled.button`
    border: none;
    padding: 20px;
    border-radius: 25px;
    background-color: #45AA29;
    color: white;
    font-family: Quicksand, sans-serif;
    font-weight: medium;
    font-size: 1.25rem;
`;

const InputsLabel = styled.label`
    font-family: Quicksand, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.5rem;
    margin: 10px;
`;

const InputsSelect = styled.select`
    background-color: #45AA29;
    color: white;
    border-radius: 10px;
    padding: 15px;
    margin: 10px;
    border: none;
    font-family: Quicksand, sans-serif;
    font-size: 1.25rem;
`;


const InputsInput = styled.input`
    background-color: #45AA29;
    color: white;
    border-radius: 10px;
    padding: 15px;
    margin: 10px;
    border: none;
    font-family: Quicksand, sans-serif;
    font-size: 1.25rem;
    width: 70px;
`;

function Inputs(props) {

    const [config, setConfig] = useState({
        model: "VGG19",
        gpu: "RTX 2080 Ti",
        hours: 12,
        provider: "Google Cloud Platform",
        efficiency: 0.43,
        region: "asia-east1"
    });

    return (
        <>
            <InputsTitle>Please select the correct configuration options for your system.</InputsTitle>
            <InputsForm>
                <InputsLabel>
                    Model Type:
                    <InputsSelect value={config.model} onChange={e => setConfig({
                    ...config,
                    model: e.target.value
                })}>
                        {models.map(model => <option value={model.name}>{model.name}</option>)}
                    </InputsSelect>
                </InputsLabel>
                <InputsLabel>
                    GPU Hardware:
                    <InputsSelect value={config.gpu} onChange={e => setConfig({
                    ...config,
                    gpu: e.target.value
                })}>
                        {gpus.map(gpu => <option value={gpu.name}>{gpu.name}</option>)}
                    </InputsSelect>
                </InputsLabel>
                <InputsLabel>
                    Hours Run:
                    <InputsInput type="number" value={config.hours} onChange={e => setConfig({
                    ...config,
                    hours: e.target.value
                })} />
                </InputsLabel>
                <InputsLabel>
                    Provider:
                    <InputsSelect value={config.provider} onChange={e => setConfig({
                    ...config,
                    provider: e.target.value
                })}>
                        <option value="Google Cloud Platform">Google Cloud Platform</option>
                        <option value="Amazon Web Services">Amazon Web Services</option>
                        <option value="Azure">Azure</option>
                        <option value="Private Infrastructure">Private Infrastructure</option>
                    </InputsSelect>
                </InputsLabel>
                {config.provider !== "Private Infrastructure" ? (<InputsLabel>
                    Region:
                    <InputsSelect value={config.region} onChange={e => setConfig({
                        ...config,
                        region: e.target.value
                    })}>
                        {sources.map(source => source.providerName === config.provider ? <option value={source.region}>{source.region}</option> : null)}
                    </InputsSelect>
                </InputsLabel>) : (<InputsLabel>
                    Carbon Efficiency (kg/kWh):
                    <InputsInput type="number" value={config.efficiency} step=".01" onChange={e => setConfig({
                        ...config,
                        efficiency: e.target.value
                    })} />
                </InputsLabel>)}
            </InputsForm>
            <InputsButton onClick={() => {
                props.setStep(2); 
                window.localStorage.setItem('calculateData', JSON.stringify(config));
            }}>Calculate my carbon impact</InputsButton>
        </>
    )
}

export default Inputs;