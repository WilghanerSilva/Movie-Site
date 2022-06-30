import { useParams } from 'react-router-dom';
import * as C from './styles';
import api from '../../utils/api-request';
import { useEffect, useState } from 'react';
import { Movie } from '../../types/movie';
import Loading from '../../components/loading';

const MoviePage = () => {
  const {id} = useParams();
  
  const [movie, setMovie] = useState<Movie>();

  useEffect(()=>{
      api.get(`/${id}`, {params:{page:1}}).then(response => setMovie(response.data));
  }, []);

  console.log(movie);
  
  return(
    movie !== undefined ?
    <C.Container>
       <C.Banner bannerPath={movie.backdrop_path}>
        <C.Poster src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}/>
       </C.Banner>
       <C.Content>
        <C.InfoContainer>
          <C.MovieTitle>{movie.title}</C.MovieTitle>
          <C.MoviePlot>
            <h3>Plot</h3>
            <p>{movie.overview}</p>
          </C.MoviePlot>
        </C.InfoContainer>
       </C.Content>
    </C.Container>
    :
    <Loading/>
  )
}

export default MoviePage;