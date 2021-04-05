import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg)
    }
`;

export const svg = styled.svg`
  animation: ${rotate} 2s linear infinite;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 50px;
  height: 50px;
  stroke: black;
  stroke-dashoffset: 50;
  stroke-dasharray: 130;
`;
