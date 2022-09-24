import { get } from "svelte/store";
import { data, player, id } from "../game/Board.svelte";
import { show } from "../Home.svelte";
import { newGame } from "../../firebase/db";

// Create a new game function
const createGame = () => {
  // Setting player to host and making it connected
  data.update((d) => ({ ...d, host: { isDisconnected: false } }));
  player.set("X");

  // Creating a new game and getting its uid
  const res = newGame(get(data));
  id.set(res.id), alert(res.id);

  // Showing the board
  show.set(true);
};

export default createGame;
