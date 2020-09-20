import React from "react";
import styled from "styled-components";
import CompareComponent from "./compareComponent";

const CompareContainer = styled.div`
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

const CompareTitle = styled.h1`
  color: white;
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const CompareDescription = styled.p`
  color: white;
  font-size: 1.75rem;
  text-align: justify;
  text-justify: auto;
`;

const CompareA = styled.a`
  color: white;
`;

const Sub = styled.sub`
  vertical-align: sub;
  font-size: smaller;
`;

const CompareComponentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;

function Compare() {

  return (
    <CompareContainer>
      <ComponentContainer>
        <CompareTitle>Compare Carbon Output</CompareTitle>
        <CompareDescription>
          See how different high performance computing systems match up against each other, and the system you use.
        </CompareDescription>
        <br />
        <CompareDescription>
          Compared using data from{" "}
          <CompareA href="https://www.top500.org/">
            TOP500
          </CompareA>{" "}
          and{" "}
          <CompareA href="https://www.co2signal.com/">
            CO<Sub>2</Sub> Signal API
          </CompareA>
        </CompareDescription>
        <CompareComponentContainer>
              <CompareComponent />
              <CompareComponent />
          </CompareComponentContainer>
      </ComponentContainer>
    </CompareContainer>
  );
}

export default Compare;
