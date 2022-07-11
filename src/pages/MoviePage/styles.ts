import styled from "styled-components";

interface props {
  bannerPath: string;
}

export const Container = styled.div`
  color: #F7FFFF;
  overflow: hidden;
`;

export const Title = styled.h1`
  margin: 0;
  text-align: center;
`;

export const Banner = styled.div<props>`
  background:url(${props => `https://image.tmdb.org/t/p/w1280/${props.bannerPath}`});
  background: linear-gradient(180deg, rgba(255,255,255,0) -3%, rgba(0,0,0,1) 95%),url(${props => `https://image.tmdb.org/t/p/w1280/${props.bannerPath}`}) ;
  background-repeat: no-repeat;
  background-size: cover;
  height: 80vh;
` 

export const Poster = styled.img`
  width: 160px;
  margin-top: -225px;
`;

export const Content = styled.div`
  background: #000;
  padding: 100px 60px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MovieTitle = styled.h2`
  text-align: center;
  background: #31B305;
  padding: 5px;
  border-radius: 15px;
  color: #eee;
  max-width: 60%;
  margin-top: 55px;
  margin-bottom: -25px;
  z-index: 5;
`;


export const InfoContainer = styled.div`
  background: #1d1d1d;
  width: calc(100vw - 50px);
  padding: 50px;
  border-top: 2px solid #31B305;
  border-bottom: 2px solid #31B305;
  display: grid;
  grid-template-columns: 70px 400px;
  column-gap: 30px;
  row-gap: 10px;
 `;

 export const Cast = styled.div``;