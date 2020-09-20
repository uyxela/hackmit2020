import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Stage, Layer, Path } from "react-konva";
import { equivnum } from '../logic';
import convs from '../../data/gfgconvs.json';
import images from '../../assets/images/images.json';

const VisualizationTitle = styled.h2`
  font-weight: bold;
  font-size: 2rem;
  margin: 40px;
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
  margin: 40px;
`;

const VisualizationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const VisualizationSelect = styled.select`
    background-color: #45AA29;
    color: white;
    border-radius: 10px;
    padding: 15px;
    margin: 10px;
    border: none;
    font-family: Quicksand, sans-serif;
    font-size: 1.25rem;
`;

const VisualizationDescription = styled.h2`
  font-weight: medium;
  font-size: 1.5rem;
  margin: 10px;
`;

const generateShapes = (number, scale) => {
  return [...Array(number)].map((_, i) => ({
    id: i.toString(),
    x: Math.random() * 800,
    y: Math.random() * 600,
    rotation: Math.random() * 180,
    scale: {
      x: scale,
      y: scale
    },
    isDragging: false,
  }));
};

const determineTitle = (metric, carbon) => {
  const conv = convs.find(conv => conv.id === metric);
  const num = Math.ceil(equivnum(metric, carbon));
  return (`${conv.name} ${conv.description} (${num})`);
}

function Visualization(props) {
  const [number, setNumber] = useState(generateShapes(0, 1));
  const [metric, setMetric] = useState('car');
  const conversionData = JSON.parse(window.localStorage.getItem('conversionData'));
  const [data, setData] = useState('M9.5 3H9V1.5a.5.5 0 0 0-1 0V3a1 1 0 0 0 1 1v4.25a.25.25 0 1 1-.5 0V6.5A1.5 1.5 0 0 0 7 5V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V6a.5.5 0 0 1 .5.5v1.75a1.25 1.25 0 1 0 2.5 0V3.5a.5.5 0 0 0-.5-.5zM6 4.5a.49.49 0 0 1-.48.5h-3A.51.51 0 0 1 2 4.5V3a.5.5 0 0 1 .5-.5h3A.5.5 0 0 1 6 3v1.5z');

  // eslint-disable-next-line
  useEffect(() => {
    const image = images.find(img => img.name === metric);
    setNumber(generateShapes(Math.ceil(equivnum(metric,conversionData.carbon)), image.scale));
    setData(image.path);
  }, [metric]);

  return (
    <>
      <VisualizationTitle>
        Putting your data into perspective
      </VisualizationTitle>
      <VisualizationContainer>
        <Stage width={800} height={600} style={{ margin: "20px", border: "4px solid #45AA29" }}>
          <Layer>
            {number.map((item) => (
              <Path
                data={data}
                key={item.id}
                id={item.id}
                x={item.x}
                y={item.y}
                fill="#89b717"
                opacity={0.8}
                draggable
                rotation={item.rotation}
                shadowColor="black"
                shadowBlur={10}
                shadowOpacity={0.6}
                shadowOffsetX={item.isDragging ? 10 : 5}
                shadowOffsetY={item.isDragging ? 10 : 5}
                scaleX={item.isDragging ? 1.2 : 1}
                scaleY={item.isDragging ? 1.2 : 1}
              />
            ))}
          </Layer>
        </Stage>
            <VisualizationSelect value={metric} onChange={e => setMetric(e.target.value)}>
            {convs.map(conv => <option value={conv.id}>{conv.id}</option>)}
            </VisualizationSelect>
      </VisualizationContainer>
      <VisualizationDescription>
        {determineTitle(metric, conversionData.carbon)}
      </VisualizationDescription>
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
