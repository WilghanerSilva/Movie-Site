import * as C from './styles';
import { MovieBanner } from '../../components/moviebanner';
import { CategoryCarousel } from '../../components/categorycarousel';
import { useEffect, useState } from 'react';
import {apiMovie} from '../../utils/api-request';
import SearchBar from '../../components/searchbar';
import { NavBar } from '../../components/navbar';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  
  useEffect(()=>{
    apiMovie.get('/popular',{params: {page: 1}}).then(response => setPopularMovies(response.data.results));
  },[])

  return (
    <C.Container>
      <NavBar/>
      <MovieBanner movie={popularMovies[1]}/>
      <C.SearchContainer>
        <SearchBar/>
      </C.SearchContainer>
    {
      <C.Body>
        <CategoryCarousel url='/popular' category='Popular'/>
        <CategoryCarousel url='/top_rated' category='Top Rated'/>
        <CategoryCarousel url='/upcoming' category='Up Coming'/>
      </C.Body>
    }
 
    </C.Container>
  );
}

export default Home;