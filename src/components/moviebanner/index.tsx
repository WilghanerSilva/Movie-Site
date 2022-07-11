import { Movie } from '../../types/movie';
import * as C from './styles';

type Props = {
  movie: Movie
}

export const MovieBanner = ({movie}: Props) => {
<<<<<<< HEAD
=======
  console.log(movie);
>>>>>>> 7de7dcfb5e0d43ac543ab0a7301b762c2ebc0475
  return (
    <C.Container banner={movie !== undefined ? movie.backdrop_path : "dNjXm72V84kzKW3qniHzYrBVFoC.jpg"}>
      <C.MovieTitle>
        {movie !== undefined ? movie.title : "loading..."}
      </C.MovieTitle>
      <C.MoviePlot>
        {movie !== undefined ? movie.overview : "loading..."}
      </C.MoviePlot>
    </C.Container>
  )
}