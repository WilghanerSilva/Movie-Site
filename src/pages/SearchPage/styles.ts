import styled from "styled-components";

export const Container = styled.div`
  background: #000;
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
`;
export const searchBarContainer = styled.div`
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
  max-width: 550px;
`;
export const resultsContainer = styled.div`
  width: 90%;
  padding: 25px;
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  column-gap: 60px;
  row-gap: 5px;
  margin-left: auto;
  margin-right: auto;

  @media(max-width: 553px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const pageButtonContainer = styled.div`
`
export const pageButton = styled.button`
`