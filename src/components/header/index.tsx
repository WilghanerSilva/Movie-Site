import * as C from './styles';
import {TiThMenu} from "react-icons/ti";

export const Header = () => {
  return(
    <C.Container>
      <C.Logo> Movie-App </C.Logo>
      <TiThMenu 
        size="34" 
        color="#fff"
        className='icon'
      />
    </C.Container>
  )

}