import styled from "styled-components";
import { keyframes } from "styled-components";

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(360deg);
  }
  `

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #000411;

  .loadingIcon{
    color: #fff;
    width: 60px;
    height: 60px;
    animation: ${rotate} 2s linear infinite;
  }
`;