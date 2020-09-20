import React from 'react';
// import styled from 'styled-components';

function Inputs(props) {
    return (
        <>
            Inputs
            <button onClick={() => {props.setStep(2)}}>Calculate my carbon impact</button>
        </>
    )
}

export default Inputs;