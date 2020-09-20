import React, { useState } from "react";
import styled from "styled-components";
import { Stage, Layer, Star, Text, Image } from "react-konva";
import car from "../../assets/images/oil.svg";

const VisualizationTitle = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
`;

const VisualizationButton = styled.button`
  border: none;
  padding: 20px;
  border-radius: 25px;
  background-color: #45aa29;
  color: white;
  font-family: Quicksand, sans-serif;
  font-weight: medium;
  font-size: 1.25rem;
`;

//const VisualizationStage = styled.Stage``;

const generateShapes = () => {
  return [...Array(10)].map((_, i) => ({
    id: i.toString(),
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    rotation: Math.random() * 180,
    isDragging: false,
  }));
};

const INITIAL_STATE = generateShapes();

function Visualization(props) {
  const [stars, setStars] = useState(INITIAL_STATE);

  return (
    <>
      <VisualizationTitle>
        Putting your data into perspective
      </VisualizationTitle>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Image x={150} y={150} image={car} />
        </Layer>
      </Stage>
      <VisualizationButton
        onClick={() => {
          props.setStep(1);
        }}
      >
        Start over
      </VisualizationButton>
    </>
  );
}

export default Visualization;
