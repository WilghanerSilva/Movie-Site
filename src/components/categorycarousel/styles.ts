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
  justify-content: space-between;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: #E1EFE6;
  align-items: stretch;
`;

export const TableTitle = styled.h2`
  margin-left: 25px;
  color: #E1EFE6;
`;

export const NavButton = styled.button`
  background-color:#00040A;
  border: none;
  border-radius: 5px;
  width: 60px;
  font-size: 48px;
  cursor: pointer;
  color: #E1EFE6;
`;

export const Container = styled.div`
  width: 96%;
  margin: auto;
  border-top: 1px solid rgba(233, 233, 255, 0.3);
  border-bottom: 1px solid rgba(233, 233, 255, 0.3);
  margin-top: 50px;
`;