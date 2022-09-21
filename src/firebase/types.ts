import type { Moves, Turn } from "../lib/types";

export interface IGame {
  scoreX: number;
  scoreO: number;
  draw?: number;
  hostname?: string;
  friendname?: string;
  isWin: boolean;
  isDraw: boolean;
  host: "X";
  friend: "O";
  turn: Turn;
  moves: string;
}

export interface IUpdateGame {
  scoreX?: number;
  scoreO?: number;
  draw?: number;
  hostname?: string;
  friendname?: string;
  turn?: Turn;
  moves?: string;
  isWin?: boolean;
  isDraw?: boolean;
}
