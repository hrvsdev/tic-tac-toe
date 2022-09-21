import { collection, getFirestore, updateDoc } from "firebase/firestore";
import { addDoc, deleteDoc, doc, getDoc } from "firebase/firestore";

import base from "./config";

import type { IGame, IUpdateGame } from "./types";

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
const getGame = async (id: string) => {
  try {
    const res = await getDoc(doc(games, id));
    return { success: true, data: res.data() };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

// Updating game data
const updateGame = async (id: string, data: IUpdateGame) => {
  console.log(data)
  try {
    await updateDoc(doc(games, id), { ...data });
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

// Delete game
const deleteGame = async (id: string) => {
  try {
    await deleteDoc(doc(games, id));
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

export { games, newGame, getGame, updateGame, deleteGame };
