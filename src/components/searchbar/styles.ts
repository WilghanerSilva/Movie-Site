import styled from "styled-components";

export const Container = styled.div`
  width: 550px;
  height: 40px;
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
  width: 90%;
  height: 90%;
  border: none;
  outline: none;
  padding: 0px 25px;
  font-size: 1.2rem;
`;

export const Button = styled.button`
width: 10%;
height: 100%;
border: none;
`;