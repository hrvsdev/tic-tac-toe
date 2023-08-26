import { getDatabase, ref } from "firebase/database";
import { set, update } from "firebase/database";

import { genId } from "../utils";

import base from "./config";

import type { Game, UpdateGame } from "./types";

// Realtime database ref
const db = getDatabase(base);

// Creating a new game
const newGame = async (data: Game) => {
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
const updateGame = async (id: string, data: UpdateGame) => {
  try {
    await update(ref(db, id), data);
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

export { db, newGame, updateGame };
