import { Actor } from "./actor"
import { Crew } from "./crew";

export type Credits = {
  cast: Actor[];
  crew: Crew[];
}