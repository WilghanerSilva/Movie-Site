import { ChangeEvent, KeyboardEvent, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import * as C from './styles';

const SearchBar = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleValueChangeEvent = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const handleKeyboardEvent = (e: KeyboardEvent) => {
    if(e.key === "Enter")
      handleSearchEvent();
  }

  const handleSearchEvent = () => {
    navigate(`/search?query=${value}&page=1`);
    window.location.reload();
  }

  return(
    <C.Container onKeyDown={handleKeyboardEvent}>
      <C.Input 
        type="text" 
        placeholder='Search a movie or actor' 
        value={value}
        onChange={handleValueChangeEvent}
      />
      <C.Button></C.Button>
    </C.Container>
  )
}

export default SearchBar;