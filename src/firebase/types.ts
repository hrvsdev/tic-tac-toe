import type { Moves, Turn } from "../lib/types";

export interface IGame {
  scoreX: number;
  scoreY: number;
  draw?: number;
  hostname?: string;
  friendname?: string;
  host: "X";
  friend: "O";
  turn: Turn;
  moves: Moves;
}

export interface IUpdateGame {
  scoreX?: number;
  scoreY?: number;
  draw?: number;
  hostname?: string;
  friendname?: string;
  turn: Turn;
  moves: Moves;
}