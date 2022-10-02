import type { Moves, Turn } from "../lib/types";

export interface IGame {
  scoreX: number;
  scoreO: number;
  isWin: boolean;
  isDraw: boolean;

  turn: Turn;
  moves: Moves;
  winner: Turn;
  round: number;
  host: {
    name?: string;
    isDisconnected: boolean;
  };
  friend: {
    name?: string;
    isDisconnected: boolean;
  };
}

export interface IUpdateGame {
  scoreX?: number;
  scoreO?: number;
  turn?: Turn;
  moves?: Moves;
  isWin?: boolean;
  isDraw?: boolean;
  winner?: Turn;
  round?: number;
  host?: {
    name?: string;
    isDisconnected: boolean;
  };
  friend?: {
    name?: string;
    isDisconnected: boolean;
  };
}
