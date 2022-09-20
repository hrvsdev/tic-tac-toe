import { initializeApp } from "firebase/app";

const app = initializeApp(JSON.parse(import.meta.env.VITE_FIREBASE));

export default app