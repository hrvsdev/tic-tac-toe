import { collection, getFirestore } from "firebase/firestore";
import { addDoc } from "firebase/firestore";

import base from "./config";

const db = getFirestore(base);

const games = collection(db, "games");

const write = (name: string[]) => {
  addDoc(games, { name });
};

export default write;
