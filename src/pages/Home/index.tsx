import * as C from './styles';
import { MovieBanner } from '../../components/moviebanner';
import { Header } from '../../components/header';
import { CategoryCarousel } from '../../components/categorycarousel';
import { useEffect, useState } from 'react';
import api from '../../utils/api-request';

const Home = () => {
  const [topRatedMovies, setTopRated] = useState([]);
  const [popularMovies, setPopular] = useState([]);
<<<<<<< HEAD
  const [upcomingMovies, setUpcoming] = useState([]);
  useEffect(()=>{
    api.get('/popular',{params:{page: 1}}).then(response => setPopular(response.data.results));
    api.get('/top_rated',{params: {page: 1}}).then(response => setTopRated(response.data.results));
    api.get('/upcoming',{params:{page:1}}).then(response => setUpcoming(response.data.results));
=======

  useEffect(()=>{
    api.get('/popular',{params:{page: 1}}).then(response => setPopular(response.data.results));
    api.get('/top_rated',{params: {page: 1}}).then(response => setTopRated(response.data.results));
>>>>>>> 7de7dcfb5e0d43ac543ab0a7301b762c2ebc0475
  },[])
  
  return (
    <C.Container>
      <Header/>
      <MovieBanner movie={popularMovies[0]}/>

      <C.divider/>

      <C.Body>
        <CategoryCarousel movies={popularMovies} category={"Popular"}/>
        <CategoryCarousel movies={topRatedMovies} category={"Top Rated"}/>
<<<<<<< HEAD
        <CategoryCarousel movies={upcomingMovies} category={"Up Coming"}/>
=======
>>>>>>> 7de7dcfb5e0d43ac543ab0a7301b762c2ebc0475
      </C.Body>

    </C.Container>
  );
}

export default Home;