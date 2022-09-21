<script lang="ts">
  import { newGame } from "src/firebase/db";
  import { gameData } from "./Board.svelte";
  import { show } from "./Home.svelte";
  import { id } from "./Board.svelte";

  const createGame = async () => {
    const res = await newGame($gameData);
    id.set(res.id);
    show.set(true);
  };

  const openGame = async () => {
    id.set(window.location.pathname.substring(1));
    show.set(true);
  };
</script>

<h1>Create a new game</h1>

<button on:click={createGame}>Create</button>

{#if window.location.pathname.substring(1)}
  <button on:click={createGame}>Create</button>
{/if}
