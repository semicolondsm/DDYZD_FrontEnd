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
  width: 35px;
  height: 35px;
  stroke: black;
  stroke-dashoffset: 50;
  position: relative;
  left: 50%;
  transform : translateX(-50%);
  stroke-dasharray: 130;
`;
