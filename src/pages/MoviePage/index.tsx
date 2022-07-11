import { useParams } from 'react-router-dom';
import * as C from './styles';
import api from '../../utils/api-request';
import { useEffect, useState } from 'react';
import { Movie } from '../../types/movie';
import { Credits } from '../../types/credits';
import Loading from '../../components/loading';
import { Header } from '../../components/header';


const MoviePage = () => {
  const convertHour = (value: Number) => {
    let hours = value.valueOf() / 60;
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    minutes = Math.round(minutes);
    return `${rhours}h ${minutes}m`
  }
  
  const {id} = useParams();
  
  const [movie, setMovie] = useState<Movie>();
  const [credits, setCredits] = useState<Credits>();

  useEffect(()=>{
      api.get(`/${id}`, {params:{page:1}}).then(response => setMovie(response.data));
      api.get(`/${id}/credits`).then(response => setCredits(response.data))
  }, );

  console.log(movie);
  
  return(
    movie !== undefined ?
    <C.Container>
      <Header/> 
      <C.Banner bannerPath={movie.backdrop_path} />
      <C.Content>
        <C.Poster src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}/>
          <C.MovieTitle>{movie.title}</C.MovieTitle>
          <C.InfoContainer>
              <h3>Plot</h3>
              <p>{movie.overview}</p>
              
              <h3>Budget</h3>
              <p>{movie.budget.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'
              })}</p>

              <h3>Run Time</h3>
              <p>{convertHour(movie.runtime)}</p>

              <h3>Popularity</h3>
              <p>{movie.popularity.toString()}</p>
          </C.InfoContainer>
       </C.Content>
       <C.Cast>
          
       </C.Cast>
    </C.Container>
    :
    <Loading/>
  )
}

export default MoviePage;