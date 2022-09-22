import type { Moves, Turn } from "../lib/types";

export interface IGame {
  scoreX: number;
  scoreO: number;
  draw?: number;
  isWin: boolean;
  isDraw: boolean;
  turn: Turn;
  moves: Moves;
  host: {
    name?:string
    isDisconnected: boolean
    sign?: Turn
  }
  friend: {
    name?:string
    isDisconnected: boolean
    sign?: Turn
  }
}

export interface IUpdateGame {
  scoreX?: number;
  scoreO?: number;
  draw?: number;
  turn?: Turn;
  moves?: Moves;
  isWin?: boolean;
  isDraw?: boolean;
  host?: {
    name?:string
    isDisconnected: boolean
    sign?: Turn
  }
  friend?: {
    name?:string
    isDisconnected: boolean
    sign?: Turn
  }
}
