  import styled from "styled-components";

interface BannerProps {
  bannerPath: string;
}

interface ProgressBarProps {
  progress: Number;
}

export const Container = styled.div`
  color: #F7FFFF;
  background: #00040A;
  max-width: 100vw;
`;


export const Banner = styled.div<BannerProps>`
  position: relative;
  background:url(${props => `https://image.tmdb.org/t/p/w1280/${props.bannerPath}`});
  background: linear-gradient(180deg, rgba(57, 54, 54, 0.4) 8.18%, rgba(0, 0, 0, 0.55) 100%),url(${props => `https://image.tmdb.org/t/p/w1280/${props.bannerPath}`}) ;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  -webkit-filter: blur(5px);
` 
export const ContentContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  padding: 80px 60px 80px 60px;
  z-index: 1;
  height: calc(100vh - 80px);
  width: calc(100vw - 120px);
  display: flex;

  @media(max-width: 553px){
    padding: 0;
    width: 100vw;
    height: 100vh;
  }
`;

export const Poster = styled.img`
  height: 90%;
  box-shadow: 2px 8px 19px 12px rgba(0, 0, 0, 0.8);
  @media(max-width: 553px){
    display: none;
  }
`;

export const InfoContainer = styled.div`
  background: rgba(217, 217, 217, 0.05);
  border: solid 1px rgba(217, 217, 217, 0.45);
  border-radius: 5px;
  height: 90%;
  max-width: 80%;
  padding-left: 60px;
  color: #E9E9FF;

  @media(max-width: 553px){
    max-height: 100%;
    width: 100%;
    padding-left: 10px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 80px;
  }
 `;

export const MovieTitle = styled.h1`
  margin-top: 5px;
  text-shadow: 7px 18px 9px rgba(0, 0, 0, 0.5);
`;

export const Title = styled.h3`
  font-size: 1.4em;
  margin-bottom: 0px;
`
export const Text = styled.p`
  width: 80%;
  margin-top: 0px;
  font-weight: 500;
`
export const GenresList = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns:repeat(auto-fit, minmax(60px, 150px)) ;
  justify-items: start;
  width: 60%;
  padding: 0;
  margin-top: 0;
  font-weight: 500;
`

export const ProgressBar = styled.div<ProgressBarProps>`
    height: 10px;
    width: 110px;
    border-radius: 15px;
    background: #E9E9FF;
    margin-top: 5px;
    
    &:after{
      background: #1B9200; 
      height: 10px;
      width: ${props => `${props.progress}%`};
      z-index: 550;
      content: "";
      display: block;
      border-radius: 15px;
    }
`;

export const VoteContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 5px;
  width: 30%;
  margin-bottom: -20px;
`
export const Label = styled.h1`
  text-align: center;
  background: #E70C22;
  padding: 5px;
`;

export const Cast = styled.div`
  min-height: 100vh;
  background: #00040A;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  row-gap: 25px;
  margin-bottom: 0;

  @media(max-width: 553px){
    grid-template-columns: 1fr;
  }
`;