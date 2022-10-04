import { get } from "svelte/store";
import { id } from "./game/game-store";

export const winLogic = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const getURLId = () => window.location.hash.substring(1);

// URL with id
export const getIdUrl = () => window.location.href + "#" + get(id);

// Id share action
export const shareId = () => {
  navigator.share({
    title: "Tic Tac Toe - T3",
    text: `Play this Tic Tac Toe game with id - ${get(id)}`,
    url: getIdUrl(),
  });
};
