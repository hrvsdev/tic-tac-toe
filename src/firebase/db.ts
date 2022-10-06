import { getDatabase, ref } from "firebase/database";
import { set, remove, update } from "firebase/database";

import { genId } from "../utils";

import base from "./config";

import type { IGame, IUpdateGame } from "./types";

// Realtime database ref
const db = getDatabase(base);

// Creating a new game
const newGame = (data: IGame) => {
  try {
    const id = genId();
    set(ref(db, id), data);
    return { success: true, id };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

// Updating game data
const updateGame = (id: string, data: IUpdateGame) => {
  try {
    update(ref(db, id), data);
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

export { db, newGame, updateGame };
