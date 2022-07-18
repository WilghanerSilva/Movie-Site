import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Movie } from '../../types/movie';
import * as C from './styles';

type Props = {
  movie: Movie
}

export const MovieBanner = ({movie}: Props) => {
  const navigate = useNavigate();

  const handleClickEvent = (e: MouseEvent<HTMLButtonElement>) => {
    return navigate(`/movie/${movie.id}`);
  }

  return (
    <C.Container banner={movie !== undefined ? movie.backdrop_path : "dNjXm72V84kzKW3qniHzYrBVFoC.jpg"}>
      <C.MovieTitle>
        {movie !== undefined ? movie.title : "loading..."}
      </C.MovieTitle>
      <C.MoviePlot>
        {movie !== undefined ? movie.overview : "loading..."}
      </C.MoviePlot>
      <C.SeeMoreButton onClick={handleClickEvent}>Ver Mais</C.SeeMoreButton>
    </C.Container>
  )
}