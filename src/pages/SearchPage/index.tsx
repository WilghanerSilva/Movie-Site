import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MoviePoster } from "../../components/movieposter";
import { NavBar } from "../../components/navbar";
import SearchBar from "../../components/searchbar";
import { Movie } from "../../types/movie";
import { apiSearch } from "../../utils/api-request";
import * as C from "./styles";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState<Movie[]>([]);

  useEffect(()=>{
    
    apiSearch.get('/movie', {params:{page: searchParams.get('page'), query: searchParams.get('query'), include_adulte: false}})
    .then(response => {
      setResults(response.data.results);
    })
  }, [searchParams]);


  return (
    <C.Container>
      <NavBar/>

      <C.searchBarContainer>
        <SearchBar/>
      </C.searchBarContainer>
      
      <C.resultsContainer>
        {results.map(item => (
          <MoviePoster movie={item}/>
        ))}
      </C.resultsContainer>
      <C.pageButtonContainer>
      </C.pageButtonContainer>
    </C.Container>
  )
}

export default SearchPage;