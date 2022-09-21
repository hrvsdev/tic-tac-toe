import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import { addDoc } from "firebase/firestore";

import base from "./config";

import type { IGame, IGetGame, IGetGameReturn, IGetGameReturnError, IUpdateGame } from "./types";

// Firestore ref
const db = getFirestore(base);

// Games collection reference
const games = collection(db, "games");

// Creating a new game
const newGame = async (data: IGame) => {
  try {
    const res = await addDoc(games, data);
    return { success: true, id: res.id };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

// Getting game
const getGame = async (id: string): Promise<IGetGameReturn | IGetGameReturnError> => {
  try {
    const res = await getDoc(doc(games, id));
    const data: IGetGame = res.data()
    return { success: true, data: data};
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

// Updating game data
const updateGame = async (data: IUpdateGame) => {
  try {
    const res = await addDoc(games, data);
    return { success: true, id: res.id };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

// Delete game
const deleteGame = async (data: IGame) => {
  try {
    const res = await addDoc(games, data);
    return { success: true, id: res.id };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

export { newGame };
