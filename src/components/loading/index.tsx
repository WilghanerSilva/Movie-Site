import * as C from './styles';
import {AiOutlineLoading3Quarters} from 'react-icons/ai';

const Loading = () => {
  return (
    <C.Container>
      <AiOutlineLoading3Quarters className='loadingIcon'/>   
    </C.Container>
  )
}

export default Loading;