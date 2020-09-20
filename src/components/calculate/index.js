import React, { useState } from "react";
import styled from "styled-components";
import CalculateComponent from "./calculateComponent";

const CalculateContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #83d86f;
  min-height: 70vh;
  padding: 10vh 0 10vh 0;
`;

const ComponentContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CalculateTitle = styled.h1`
  color: white;
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const CalculateDescription = styled.p`
  color: white;
  font-size: 1.75rem;
  text-align: justify;
  text-justify: auto;
`;

const CalculateA = styled.a`
  color: white;
`;

const Sub = styled.sub`
  vertical-align: sub;
  font-size: smaller;
`;

function Calculate() {
  const [step, setStep] = useState(1);

  return (
    <CalculateContainer>
      <ComponentContainer>
        <CalculateTitle>Calculate Your Impact</CalculateTitle>
        <CalculateDescription>
          Find the carbon impact of a machine learning model computation by
          indicating relevant configuration options.
        </CalculateDescription>
        <br />
        <CalculateDescription>
          Calculated using data from{" "}
          <CalculateA href="https://iq.opengenus.org/floating-point-operations-per-second-flops-of-machine-learning-models/">
            OpenGenus IQ
          </CalculateA>{" "}
          and{" "}
          <CalculateA href="https://github.com/mlco2/impact/tree/master/data">
            MLCO<Sub>2</Sub> Impact
          </CalculateA>
          .
        </CalculateDescription>
        <CalculateComponent step={step} setStep={setStep} />
      </ComponentContainer>
    </CalculateContainer>
  );
}

export default Calculate;
