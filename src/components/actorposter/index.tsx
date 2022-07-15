import { Actor } from '../../types/actor';
import * as C from './style';

type Props = {
  actor: Actor
}

export const ActorPost = ({actor}:Props) => {

  return (
    <C.Container>
      <C.Profile src={actor.profile_path === null ? '/person.png' : `https://image.tmdb.org/t/p/w1280${actor.profile_path}`}/>
      <p>{actor.name}</p>
      <p>{actor.character}</p>
      <p>{actor.id}</p>
    </C.Container>
  )
}