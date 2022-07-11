import styled from "styled-components";

interface props {
  bannerPath: string;
}

<<<<<<< HEAD
export const Container = styled.div`
  color: #F7FFFF;
  overflow: hidden;
`;
=======
export const Container = styled.div``;
>>>>>>> 7de7dcfb5e0d43ac543ab0a7301b762c2ebc0475

export const Title = styled.h1`
  margin: 0;
  text-align: center;
`;

export const Banner = styled.div<props>`
  background:url(${props => `https://image.tmdb.org/t/p/w1280/${props.bannerPath}`});
<<<<<<< HEAD
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
=======
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

>>>>>>> 7de7dcfb5e0d43ac543ab0a7301b762c2ebc0475
`;

export const MovieTitle = styled.h2`
  text-align: center;
<<<<<<< HEAD
  background: #31B305;
=======
  background: #DB4D1A;
>>>>>>> 7de7dcfb5e0d43ac543ab0a7301b762c2ebc0475
  padding: 5px;
  border-radius: 15px;
  color: #eee;
  max-width: 60%;
<<<<<<< HEAD
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
=======
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
>>>>>>> 7de7dcfb5e0d43ac543ab0a7301b762c2ebc0475
