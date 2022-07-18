import styled from "styled-components";

export const Container = styled.div`
  width: 144px;
  margin-left: 20px;
  margin-right: 20px;
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
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');
  font-family: "Inter", sans-serif;
`;

export const Poster = styled.img`
  height: 200px;
  width: 144px;
  box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.5);
`;

export const Title = styled.h3`
  text-align: center;
  padding: 5px 10px;
  height: 60px;
  width: 120px;
  overflow: hidden;
  font-size: 0.8rem;
`;