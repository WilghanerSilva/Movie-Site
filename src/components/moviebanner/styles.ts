import styled from "styled-components";

interface Props  {
  banner: string | undefined; 
}

export const Container = styled.div<Props>`
  background-color: #CDCDCD;
  height: 100vh;
  width: 100vw;
  background:url(${props => props.banner !== undefined ? `https://image.tmdb.org/t/p/w1280/${props.banner}` : "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"});
  background:linear-gradient(180deg, rgba(9,9,9,0.92) 9%, rgba(9,9,9,0.74) 26%, rgba(9,9,9,0.40518205573244925) 51%, rgba(9,9,9,0.72) 78%, rgba(9,9,9,0.94) 94%), url(${props => props.banner !== undefined ? `https://image.tmdb.org/t/p/w1280/${props.banner}` : "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: #E9E9FF;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');
  font-family: "Inter", sans-serif;
`;

export const MovieTitle = styled.h1`
  font-size: 2.1rem;
  margin-left: 50px;
  width: 50%;
  font-weight: 800;

  @media(max-width: 533px){
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const MoviePlot = styled.p`
  font-size: 1.1rem;
  margin-left: 50px;
  margin-top: -20px;
  margin-bottom: 80px;
  width: 50%;

  @media(max-width: 533px){
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const SeeMoreButton = styled.button`
  background-color: #E70C22;
  border-radius: 20px;
  width: 120px;
  height: 30px;
  border: none;
  font-weight: 800;
  color: #E9E9FF;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;

  &:hover{
    cursor: pointer;
    background-color: #AD0516;
  }
`