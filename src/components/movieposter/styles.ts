import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  margin-left: 5px;
  &:hover{
    transform: scale(1.10);
    cursor: pointer;
    z-index: 10;
  }
`;

export const Poster = styled.img`
  height: 200px;
  width: 144px;
  box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.5);
`;

export const Title = styled.h3`
  background: #383739;
  text-align: center;
  border-radius: 5px;
  box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.5);
  padding: 5px 10px;
  height: 60px;
  width: 120px;
  overflow: hidden;
`;