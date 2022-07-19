import * as C from "./styles";
import {Movie} from '../../types/movie';
import { useNavigate } from "react-router-dom";
import { MouseEvent } from "react";

type Props = {
  movie: Movie;
}

export const MoviePoster = ({movie}:Props) => {
  const navigate = useNavigate();

  const sliceTitle = (title: string) => {
    let finalTitle: string;
    
    if(title.length > 23){
      finalTitle = title.slice(0, 23).concat("...");
    }else{
      finalTitle = title;
    }

    return finalTitle;
  }

  const handleContainerClick = (e:MouseEvent) => {
    navigate(`/movie/${movie.id}`);
    window.scrollTo(0,0);
    window.location.reload();
  };

  return (
      <C.Container onClick={handleContainerClick}>
        <C.Poster src={movie.poster_path !== null ? `https://image.tmdb.org/t/p/w1280${movie.poster_path}` : '/missingMovie.png'}/>
        <C.Title>{sliceTitle(movie.title)}</C.Title>
      </C.Container>
  );
}