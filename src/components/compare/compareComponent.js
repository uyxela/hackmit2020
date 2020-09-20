import React, { useState } from 'react';
import styled from 'styled-components';
import green from '../../data/green500.json';
import Visualization from './visualization';
import VisualizationUser from './visualizationUser';
// import top from '../../data/green500.json';

const CompareContainer = styled.div`
    width: 50%;
    min-width: 300px;
    background-color: white;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    padding: 30px;
    margin: 30px;
`;

const CompareSelect = styled.select`
    background-color: #45AA29;
    color: white;
    border-radius: 10px;
    padding: 15px;
    margin: 10px;
    border: none;
    font-family: Quicksand, sans-serif;
    font-size: 1.25rem;
`;

const checkInputted = () => {
    const calc = window.localStorage.getItem('calculateData');
    const conv = window.localStorage.getItem('conversionData');
    if (calc !== null && conv !== null) {
        return true;
    }
    return false;
}

const CompareComponent = () => {
    const [selected, setSelected] = useState("Satori");

    return (
        <CompareContainer>
            <CompareSelect value={selected} onChange={e => setSelected(e.target.value)}>
                {checkInputted ? <option value="This">Your Machine</option> : null}
                {green.map(item => <option value={item.Name}>Rank {item.Rank}: {item.Name}</option>)}
            </CompareSelect>
            <div>
                {selected === "This" ? <VisualizationUser /> : <Visualization computer={selected} />}
            </div>
            
        </CompareContainer>
    )
}

export default CompareComponent;