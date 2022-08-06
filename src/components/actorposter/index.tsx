import { Actor } from '../../types/actor';
import * as C from './style';

type Props = {
  actor: Actor
}

export const ActorPost = ({actor}:Props) => {

  return (
    <C.Container>
      <C.Profile src={actor.profile_path === null ? '/person.png' : `https://image.tmdb.org/t/p/w1280${actor.profile_path}`} alt="Actor Photo"/>
      <C.Content>
        <h3>{actor.name}</h3>
        <p>{actor.character}</p>
      </C.Content>
    </C.Container>
  )
}