import * as C from './styles';
import { MovieBanner } from '../../components/moviebanner';
import { Header } from '../../components/header';
import { CategoryCarousel } from '../../components/categorycarousel';
import { useEffect, useState } from 'react';
import api from '../../utils/api-request';

const Home = () => {
  const [topRatedMovies, setTopRated] = useState([]);
  const [popularMovies, setPopular] = useState([]);

  useEffect(()=>{
    api.get('/popular',{params:{page: 1}}).then(response => setPopular(response.data.results));
    api.get('/top_rated',{params: {page: 1}}).then(response => setTopRated(response.data.results));
  },[])
  
  return (
    <C.Container>
      <Header/>
      <MovieBanner movie={popularMovies[0]}/>

      <C.divider/>

      <C.Body>
        <CategoryCarousel movies={popularMovies} category={"Popular"}/>
        <CategoryCarousel movies={topRatedMovies} category={"Top Rated"}/>
      </C.Body>

    </C.Container>
  );
}

export default Home;