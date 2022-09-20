import { initializeApp } from "firebase/app";

const base = initializeApp(JSON.parse(import.meta.env.VITE_FIREBASE));

export default base