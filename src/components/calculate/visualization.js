import React, { useState, useEffect } from "react";
import styled from "styled-components";
<<<<<<< HEAD
import { Stage, Layer, Path } from "react-konva";
import { equivnum } from '../logic';
import convs from '../../data/gfgconvs.json';
=======
import { Stage, Layer, Star, Text, Image } from "react-konva";
import car from "../../assets/images/oil.svg";
>>>>>>> 7a3e773dced0a2026840dc8aea1bb9f893e92aac

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

const generateShapes = (number) => {
  return [...Array(number)].map((_, i) => ({
    id: i.toString(),
    x: Math.random() * 800,
    y: Math.random() * 600,
    rotation: Math.random() * 180,
    scale: {
      x: 0.5,
      y: 0.5
    },
    isDragging: false,
  }));
};

const determineTitle = (metric) => {
  const conv = convs.find(conv => conv.id === metric);
  return (`${conv.name} ${conv.description}`);
}

function Visualization(props) {
  const [number, setNumber] = useState(generateShapes(0));
  const [metric, setMetric] = useState('car');
  const conversionData = JSON.parse(window.localStorage.getItem('conversionData'));
  const [data, setData] = useState('M29.395,0H17.636c-3.117,0-5.643,3.467-5.643,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759,c3.116,0,5.644-2.527,5.644-5.644V6.584C35.037,3.467,32.511,0,29.395,0z M34.05,14.188v11.665l-2.729,0.351v-4.806L34.05,14.188z,M32.618,10.773c-1.016,3.9-2.219,8.51-2.219,8.51H16.631l-2.222-8.51C14.41,10.773,23.293,7.755,32.618,10.773z M15.741,21.713,v4.492l-2.73-0.349V14.502L15.741,21.713z M13.011,37.938V27.579l2.73,0.343v8.196L13.011,37.938z M14.568,40.882l2.218-3.336,h13.771l2.219,3.336H14.568z M31.321,35.805v-7.872l2.729-0.355v10.048L31.321,35.805z');

  useEffect(() => {
    // eslint-disable-next-line
    setNumber(generateShapes(Math.ceil(equivnum(metric,conversionData.carbon))));
    //setData();
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
        {determineTitle(metric)}
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
