import * as C from './styles';
import { MoviePoster } from "../movieposter";
import { Movie } from '../../types/movie';
import {MouseEvent} from 'react';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';

type Props = {
  movies: Movie[];
  category: string;
}

export const CategoryCarousel = ({movies, category}:Props) => {
    const handleToLeftClick = (event: MouseEvent) => {
      if(event.currentTarget.parentElement !== null){
        event.currentTarget.parentElement.children[1].scrollLeft -= 200;
        console.log(event.currentTarget.parentElement.children[1].scrollLeft);
      }
    }

    const handleToRightClick = (event: MouseEvent) => {
      if(event.currentTarget.parentElement !== null){
        event.currentTarget.parentElement.children[1].scrollLeft += 200;
        console.log(event.currentTarget.parentElement.children[1].scrollLeft);
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
              movies.map((item, index) => (
               <MoviePoster movie={item} key={index}/>
              ))
            }
          </C.CarouselContainer>
          
        <C.NavButton onClick={(e) => handleToRightClick(e)}>
          <AiOutlineArrowRight/>
        </C.NavButton>

        </C.SubContainer>
    </C.Container>
  )
}