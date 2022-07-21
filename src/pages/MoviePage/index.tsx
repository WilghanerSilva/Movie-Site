import { useParams } from 'react-router-dom';
import * as C from './styles';
import {apiMovie} from '../../utils/api-request';
import { useEffect, useState } from 'react';
import { Movie } from '../../types/movie';
import { Credits } from '../../types/credits';
import Loading from '../../components/loading';
import { ActorPost } from '../../components/actorposter';
import { CategoryCarousel } from '../../components/categorycarousel';
import { NavBar } from '../../components/navbar';


const MoviePage = () => {
  const {id} = useParams();
  
  const [movie, setMovie] = useState<Movie>();
  const [credits, setCredits] = useState<Credits>();
  const [similarMovies, setSimilarMovies] = useState<Movie[]>();

  useEffect(()=>{
      apiMovie.get(`/${id}`, {params:{page:1}}).then(response => {setMovie(response.data); console.log(response.data)});
      apiMovie.get(`/${id}/credits`).then(response =>{ setCredits(response.data); console.table(response.data)});
      apiMovie.get(`/${id}/recommendations`).then(response => {setSimilarMovies(response.data.results)})
    },[]);

  return(
    movie !== undefined && similarMovies !== undefined ?
    <C.Container>
      <NavBar/>
      <C.Banner bannerPath={movie.backdrop_path}/>
      <C.ContentContainer>
        <C.Content>
          <C.Poster src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}/>
          <C.InfoContainer>
            <C.MovieTitle>{movie.title}</C.MovieTitle>
            
            <C.Title>Plot</C.Title>
            <C.Text>{movie.overview}</C.Text>
            
            <C.Title>Genres</C.Title>
            <C.GenresList>
              {movie.genres.map((item, key) => (<li key={key}>{item.name}</li>))}
            </C.GenresList>

            <C.Title>IMDB Rating</C.Title>
            <C.VoteContainer>
              <C.ProgressBar progress={movie.vote_average*10}/>
              <C.Text>{movie.vote_average}</C.Text>
            </C.VoteContainer>

            <C.Title>Director</C.Title>
            <C.Text>{credits?.crew.map(item => item.job === "Director" ? item.name : "")}</C.Text>
          </C.InfoContainer>
        </C.Content>
      </C.ContentContainer>
      <C.Label>Actors</C.Label>
      <C.Cast>
        {
          credits?.cast.map(item => <ActorPost actor={item} key={item.id}/>)
        }
      </C.Cast>
      <CategoryCarousel movies={similarMovies} category="Similar Movies"/>
    </C.Container>
    :
    <Loading/>
  )
}

export default MoviePage;