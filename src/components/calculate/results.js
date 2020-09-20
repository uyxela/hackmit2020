import React from 'react';
// import styled from 'styled-components';

function Results(props) {
    return (
        <>
            Results
            <button onClick={() => {props.setStep(3)}}>Visualize this data</button>
        </>
    )
}

export default Results;