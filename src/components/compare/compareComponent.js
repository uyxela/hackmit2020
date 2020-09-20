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
    const [computer, setComputer] = useState({"Rank":"7","TOP500 Rank":"421","Name":"Satori","Computer":"IBM Power System AC922, IBM POWER9  20C 2.4GHz, Infiniband EDR, NVIDIA Tesla V100 SXM2","Site":"MIT/MGHPCC Holyoke, MA","Manufacturer":"IBM","Country":"United States","Year":"2019","Segment":"Academic","Total Cores":"23040","Accelerator/Co-Processor Cores":"20480","Rmax [TFlop/s]":"1464","Rpeak [TFlop/s]":"1739.78","Power (kW)":"94","Power Source":"","Power Efficiency [GFlops/Watts]":"15.57446809","Power Quality Level":"0","Measured Cores":"","Optimized Run (HPL)":"","Optimized Run (Peak Power)":"","Architecture":"Cluster","Processor":"IBM POWER9  20C 2.4GHz","Processor Technology":"Power","Processor Speed (MHz)":"2400","Operating System":"RHEL 7.6","OS Family":"RHEL 7.6","Accelerator/Co-Processor":"NVIDIA Tesla V100 SXM2","Cores per Socket":"20","Processor Generation":"IBM POWER9","System Model":"IBM Power System AC922","System Family":"IBM Power Systems","Interconnect Family":"Infiniband","Interconnect":"Infiniband EDR","Continent":"North America","Site ID":"50822","System ID":"179780"});

    return (
        <CompareContainer>
            <CompareSelect value={selected} onChange={e => setSelected(e.target.value)}>
                {checkInputted ? <option value="This">Your Machine</option> : null}
                {green.map(item => <option value={item.Name} onClick={() => setComputer(item)}>Rank {item.Rank}: {item.Name}</option>)}
            </CompareSelect>
            <div>
                {selected === "This" ? <VisualizationUser /> : <Visualization computer={computer} />}
            </div>
            
        </CompareContainer>
    )
}

export default CompareComponent;