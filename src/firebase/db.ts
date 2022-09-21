import { getDatabase, ref } from "firebase/database";
import { set, remove, update } from "firebase/database";

import { genId } from "../utils";

import base from "./config";

import type { IGame, IUpdateGame } from "./types";

// Realtime database ref
const db = getDatabase(base);

// Creating a new game
const newGame = async (data: IGame) => {
  try {
    const id = genId();
    await set(ref(db, id), data);
    return { success: true, id };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

// Updating game data
const updateGame = async (id: string, data: IUpdateGame) => {
  console.log(data);
  try {
    await update(ref(db, id), data);
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

// Delete game
const deleteGame = async (id: string) => {
  try {
    await remove(ref(db, id));
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

export { newGame, updateGame, deleteGame };
