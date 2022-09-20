import { getDatabase, ref, set } from "firebase/database";
import base from "./config";

const db = getDatabase(base);

const write = (name: string) => {
  set(ref(db), { name });
};

export default write;
