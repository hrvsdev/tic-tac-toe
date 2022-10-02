import { writable, derived, get } from "svelte/store";

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

  // Current round
  round: 1,

  // Host and friend value
  host: { isDisconnected: true },
  friend: { isDisconnected: true },

  // Current game win and draw state
  isWin: false,
  isDraw: false,

  // Current round of the game
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
  if (d.isDraw) return "Tie! Click to play";
  if (d.isWin) return get(player) === d.winner ? `You (${d.winner}) won!` : `${d.winner} won!`;
  else return get(player) === d.turn ? `Your (${d.turn}) turn!` : `${d.turn}'s turn!`;
});