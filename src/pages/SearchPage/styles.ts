import styled from "styled-components";

export const Container = styled.div`
  background: #000;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

export const resultsContainer = styled.div`
  width: 90%;
  padding: 1rem;
  overflow: hidden;
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(4, 200px);
  column-gap: 100px;
  row-gap: 80px;
  align-items: center;
  justify-content: center;
`
export const pageButtonContainer = styled.div`
`
export const pageButton = styled.button`
`