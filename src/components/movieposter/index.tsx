import * as C from "./styles";
import {Movie} from '../../types/movie';
import { Link } from "react-router-dom";

type Props = {
  movie: Movie;
}

export const MoviePoster = ({movie}:Props) => {
  const sliceTitle = (title: string) => {
    let finalTitle: string;
    
    if(title.length > 18){
      finalTitle = title.slice(0, 15).concat("...");
    }else{
      finalTitle = title;
    }

    return finalTitle;
  }

  return (
    <Link to={`/movie/${movie.id}`}>
      <C.Container>
        <C.Poster src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}/>
        <C.Title>{sliceTitle(movie.title)}</C.Title>
      </C.Container>
    </Link>
  );
}