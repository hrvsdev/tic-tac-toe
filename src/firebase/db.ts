import { getDatabase } from "firebase/database";
import base from "./config";

const db = getDatabase(base);

const write = ()