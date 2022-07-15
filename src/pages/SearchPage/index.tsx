import { useEffect, useState, MouseEvent } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MoviePoster } from "../../components/movieposter";
import { NavBar } from "../../components/navbar";
import SearchBar from "../../components/searchbar";
import { Movie } from "../../types/movie";
import { apiSearch } from "../../utils/api-request";
import * as C from "./styles";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState<Movie[]>([]);
  const [pages, setPages] = useState<Number>(0);
  const navigate = useNavigate();

  useEffect(()=>{
    
    apiSearch.get('/movie', {params:{page: searchParams.get('page'), query: searchParams.get('query'), include_adulte: false}})
    .then(response => {
      setResults(response.data.results);
      setPages(response.data.total_pages);
    })
  }, [searchParams]);

  const handleClickButton = (e: MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;
    navigate(`/search?query=${searchParams.get('query')}&page=${value}`);
    window.location.reload();
  }

  return (
    <C.Container>
      <NavBar/>
      <SearchBar/>
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