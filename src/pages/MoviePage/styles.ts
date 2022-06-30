import styled from "styled-components";

interface props {
  bannerPath: string;
}

export const Container = styled.div``;

export const Title = styled.h1`
  margin: 0;
  text-align: center;
`;

export const Banner = styled.div<props>`
  background:url(${props => `https://image.tmdb.org/t/p/w1280/${props.bannerPath}`});
  background: radial-gradient(circle, rgba(23,3,3,0) 3%, rgba(1,2,43,0.3939775739397321) 40%, rgba(0, 1, 23,0.67128849830948) 94%, rgba(0, 1, 13,0.8085434002702644) 100%),url(${props => `https://image.tmdb.org/t/p/w1280/${props.bannerPath}`}) ;
  background-repeat: no-repeat;
  background-size: cover;
  height: 95vh;
  border-bottom: 8px solid #bbb;
`

export const Poster = styled.img`
  width: 160px;
  position: absolute;
  left: 45vw;
  top: 70vh;
`;

export const Content = styled.div`
  background: #e6f1e4;
  padding: 100px 60px 10px;

  h2{
   
  }

  p{
    font-size: 20px;
    font-weight: bold;
  }

`;

export const MovieTitle = styled.h2`
  text-align: center;
  background: #DB4D1A;
  padding: 5px;
  border-radius: 15px;
  color: #eee;
  max-width: 60%;
  position: absolute;
  top: 108vh;
  left: 30vw;
`;

export const MoviePlot = styled.div`

`

export const InfoContainer = styled.div`
  background: rgba(4, 15, 79, 0.5);
  border-radius: 15px;
  padding: 0px 20px 20px;
`;