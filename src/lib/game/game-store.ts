import { writable } from "svelte/store";

import type { IGame } from "src/firebase/types";
import type { Turn } from "../types";

// Game data used for sharing between players via db
export const data = writable<IGame>({
  // Current turn
  turn: "X",

  // Moves of the board
  moves: Array(9).fill({ value: "", state: "" }),

  // Current scores of players
  scoreX: 0,
  scoreO: 0,
  draw: 0,

  // Host and friend value
  host: { isDisconnected: true, sign: "X" },
  friend: { isDisconnected: true, sign: "O" },

  // Current game win and draw state
  isWin: false,
  isDraw: false,
});

// Id of the game
export const id = writable("");

// Player status state
export const player = writable<Turn>("X");

// Board show state
export const show = writable(false)