import { writable, derived } from "svelte/store";

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
export const show = writable(false);

// Status of the game
export const status = derived(data, (d) => {
  if (d.host.isDisconnected) return "Host (X) disconnected!";
  if (d.friend.isDisconnected) return "Friend (O) disconnected!";
  if (d.isWin && d.turn === "O") return "X won!";
  if (d.isWin && d.turn === "X") return "O won!";
  if (d.isDraw) return "Tie! Click to play";
  if (d.turn === "X") return "X will move!";
  if (d.turn === "O") return "O will move";
});

// Current round of the game

export const round = derived(data, (d) => {
  return d.scoreX + d.scoreO + d.draw + 1;
});
