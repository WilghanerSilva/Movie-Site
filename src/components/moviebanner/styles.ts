import styled from "styled-components";

interface Props  {
  banner: string | undefined; 
}

export const Container = styled.div<Props>`
  background-color: #CDCDCD;
  height: 540px;
  width: 97%;
  margin: 25px auto; 
  background:url(${props => props.banner !== undefined ? `https://image.tmdb.org/t/p/w1280/${props.banner}` : "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"});
  background:linear-gradient(214deg, rgba(4,118,142,0.08) 0%, rgba(0,0,10,0.4) 33%), url(${props => props.banner !== undefined ? `https://image.tmdb.org/t/p/w1280/${props.banner}` : "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"});
  background-repeat: no-repeat;
  background-size: cover;
  color: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 25px;
  border: 2px solid #bbb;
  border-radius: 5px;
`;

export const MoviePlot = styled.p`
  width: 60%;
`;

export const MovieTitle = styled.h2`
`;