import type { Moves, Turn } from "../lib/types";

export interface IGame {
  scoreX: number;
  scoreY: number;
  draw?: number
  hostname?: string
  friendname?: string
  host: Turn;
  friend: Turn;
  turn: Turn;
  moves: Moves;
}
