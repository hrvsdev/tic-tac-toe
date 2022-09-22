<script lang="ts">
  import { data, player, id } from "./Board.svelte";
  import { db, newGame, updateGame } from "../firebase/db";
  import { show } from "./Home.svelte";
  import { get, ref } from "firebase/database";

  import type { IGame } from "../firebase/types";

  // Create a new game function
  const createGame = () => {
    // Setting player to host and making it connected
    $data.host.isDisconnected = false;
    $player = "X";

    // Creating a new game and getting its uid
    const res = newGame($data);
    id.set(res.id), alert(res.id);

    // Showing the board
    show.set(true);
  };

  // Join a game
  const openGame = async () => {
    const path = window.location.pathname.substring(1);
    id.set(path);

    const snap = await get(ref(db, path));
    const data = snap.val() as IGame;

    if (data.host.isDisconnected) return alert("Host is disconnected");
    if (!data.friend.isDisconnected) return alert("There are already connections");

    updateGame(path, { friend: { isDisconnected: false } });
    $player = "O";
    show.set(true);
  };
</script>

<h1>Create a new game</h1>

<button on:click={createGame}>Create</button>

{#if window.location.pathname.substring(1)}
  <button on:click={openGame}>Join</button>
{/if}
