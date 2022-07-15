import * as C from './styles';
import {TiThMenu} from "react-icons/ti";
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return(
    <C.Container>
      <Link to='/'>
        <C.Logo> Movie-App </C.Logo>
      </Link>
      <TiThMenu 
        size="34" 
        color="#fff"
        className='icon'
      />
    </C.Container>
  )

}