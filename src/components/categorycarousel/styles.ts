import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 96%;
  margin: 0 auto;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 20px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-behavior: smooth;
  background-color: rgba(2, 14, 56, 0.5);
  border: 2px solid rgba(300, 300, 300, 0.5);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  color: #E1EFE6;
  align-items: stretch;
  margin-bottom: 90px;
`;

export const TableTitle = styled.h2`
  margin-left: 25px;
  color: #E1EFE6;
`;

export const NavButton = styled.button`
  background-color: #DB4D1A;
  border: none;
  border-radius: 5px;
  width: 60px;
  font-size: 48px;
  cursor: pointer;
  color: #E1EFE6;
  &:hover{
    background-color: #B74015
  }
`;

export const GeneralContainer = styled.div`
  width: 96%;
  margin: auto;
`;