import React, { useState } from "react";
import styled from "styled-components";
import { Stage, Layer, Star, Text } from "react-konva";
import car from "../../assets/images/car.png";

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
      <Stage width={"600px"} height={"600px"}>
        <Layer>
          {stars.map((star) => (
            <Star
              key={star.id}
              id={star.id}
              x={star.x}
              y={star.y}
              numPoints={5}
              innerRadius={20}
              outerRadius={40}
              fill="#89b717"
              opacity={0.8}
              draggable
              rotation={star.rotation}
              shadowColor="black"
              shadowBlur={10}
              shadowOpacity={0.6}
              shadowOffsetX={star.isDragging ? 10 : 5}
              shadowOffsetY={star.isDragging ? 10 : 5}
              scaleX={star.isDragging ? 1.2 : 1}
              scaleY={star.isDragging ? 1.2 : 1}
            />
          ))}
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
