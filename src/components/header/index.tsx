import * as C from './styles';
import {TiThMenu} from "react-icons/ti";
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> 7de7dcfb5e0d43ac543ab0a7301b762c2ebc0475

export const Header = () => {
  return(
    <C.Container>
<<<<<<< HEAD
      <Link to='/'>
        <C.Logo> Movie-App </C.Logo>
      </Link>
=======
      <C.Logo> Movie-App </C.Logo>
>>>>>>> 7de7dcfb5e0d43ac543ab0a7301b762c2ebc0475
      <TiThMenu 
        size="34" 
        color="#fff"
        className='icon'
      />
    </C.Container>
  )

}