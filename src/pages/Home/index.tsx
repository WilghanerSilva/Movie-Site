import * as C from './styles';
import { MovieBanner } from '../../components/moviebanner';
import { CategoryCarousel } from '../../components/categorycarousel';
import { useEffect, useState } from 'react';
import {apiMovie} from '../../utils/api-request';
import SearchBar from '../../components/searchbar';
import { NavBar } from '../../components/navbar';

const Home = () => {
  const [topRatedMovies, setTopRated] = useState([]);
  const [popularMovies, setPopular] = useState([]);
  const [upcomingMovies, setUpcoming] = useState([]);
  
  useEffect(()=>{
    apiMovie.get('/popular',{params:{page: 1}}).then(response => setPopular(response.data.results));
    apiMovie.get('/top_rated',{params: {page: 1}}).then(response => setTopRated(response.data.results));
    apiMovie.get('/upcoming',{params:{page:1}}).then(response => setUpcoming(response.data.results));
  },[])
  
  console.log(topRatedMovies);

  return (
    <C.Container>
      <NavBar/>
      <MovieBanner movie={popularMovies[1]}/>
      <C.SearchContainer>
        <SearchBar/>
      </C.SearchContainer>
    {
      <C.Body>
        <CategoryCarousel movies={popularMovies} category={"Popular"}/>
        <CategoryCarousel movies={topRatedMovies} category={"Top Rated"}/>
        <CategoryCarousel movies={upcomingMovies} category={"Up Coming"}/>
      </C.Body>
    }
 
    </C.Container>
  );
}

export default Home;