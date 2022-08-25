import * as C from './styles';
import { MoviePoster } from "../movieposter";
import {MouseEvent, useEffect, useState} from 'react';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
import { Movie } from '../../types/movie';
import { apiMovie } from '../../utils/api-request';

type Props = {
  url: string;
  category: string;
}

export const CategoryCarousel = ({url, category}:Props) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [page, setPage] = useState(1);

    useEffect(()=>{
      apiMovie.get(url,{params: {page}}).then(response => setMovies([...movies, ...response.data.results]));      
    },[page]);

    useEffect(()=>{
      const intersecionObserver = new IntersectionObserver((entries) => {
        if(entries.some((entry) => entry.isIntersecting)) {
          console.log('Elemento Visivel!!');
          setPage((pageInsideState) => pageInsideState + 1)
        }
      });
      const element = document.querySelector(`#${category}-observer`);
      if(element){
        intersecionObserver.observe(element);
        return () => intersecionObserver.disconnect();
      }
    }, []);
    
  const handleToLeftClick = (event: MouseEvent) => {
    if(event.currentTarget.parentElement !== null){
      event.currentTarget.parentElement.children[1].scrollLeft -= 200;
    }
  }

  const handleToRightClick = (event: MouseEvent) => {
    if(event.currentTarget.parentElement !== null){
      event.currentTarget.parentElement.children[1].scrollLeft += 200;
    }
  }

  return(
    <C.Container>
      <C.TableTitle>{category}</C.TableTitle>

        <C.SubContainer>
          <C.NavButton onClick={(e) => handleToLeftClick(e)}>
            <AiOutlineArrowLeft/>
          </C.NavButton>

          <C.CarouselContainer>
            {
              movies.map(movie => (
                <MoviePoster movie={movie}/>
              ))
            }
            <C.finalItem id={`${category}-observer`}>
              Final
            </C.finalItem>
          </C.CarouselContainer>
          
        <C.NavButton onClick={(e) => handleToRightClick(e)}>
          <AiOutlineArrowRight/>
        </C.NavButton>

        </C.SubContainer>
    </C.Container>
  )
}