import styled from "styled-components";

export const Container = styled.div`
  width: 500px;
  height: 30px;
  display: flex;
  justify-content: center;
  position: relative;
  background: #fff;
  padding: 0;

  @media(max-width: 533px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
  
`;

export const Input = styled.input`
  width: 100%;
  height: 90%;
  border: none;
  outline: none;
`;

export const Button = styled.button`
width: 30px;
height: 100%;
border: none;
`;