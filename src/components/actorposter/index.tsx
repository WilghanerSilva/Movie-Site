import { Actor } from '../../types/actor';
import * as C from './style';

type Props = {
  actor: Actor
}

export const ActorPost = ({actor}:Props) => {
  
  return (
    <C.Container>
      <C.Profile src={`https://image.tmdb.org/t/p/w1280${actor.profile_path}`}/>
    </C.Container>
  )
}