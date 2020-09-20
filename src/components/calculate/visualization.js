import React from 'react';
// import styled from 'styled-components';

function Visualization(props) {
    return (
        <>
            Visualization
            <button onClick={() => {props.setStep(1)}}>Start over</button>
        </>
    )
}

export default Visualization;