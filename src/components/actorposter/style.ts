import styled from "styled-components";

export const Container = styled.div`
  color: #f1f1f1;
  display: flex;
  @media(max-width: 553px){
    max-width: 100%;
    flex-direction: column;
  }
`;
export const Content = styled.div`
  border: 1px solid #fff;
  width: 410px;
  background: rgba(217, 217, 217, 0.12);
  text-align: center;
  padding: 25px 15px;

  @media(max-width: 553px){
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
`

export const Profile = styled.img`
  width: 180px;
  height: 290px;

  @media(max-width: 553px){
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    height: auto;
  }
`;