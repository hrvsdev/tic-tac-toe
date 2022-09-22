<script lang="ts">
  import { data, player } from "./Board.svelte";
  import { newGame } from "../firebase/db";
  import { show } from "./Home.svelte";
  import { id } from "./Board.svelte";

  const createGame = () => {
    $data.host.isDisconnected = false;
    $data.host.sign = "X";
    $player = "X"

    const res = newGame($data);
    id.set(res.id);
    console.log(res.id);
    show.set(true);
  };

  const openGame = () => {
    $data.host.isDisconnected = false;
    $data.host.sign = "O";
    $player = "O"
    
    id.set(window.location.pathname.substring(1));
    show.set(true);
  };
</script>

<h1>Create a new game</h1>

<button on:click={createGame}>Create</button>

{#if window.location.pathname.substring(1)}
  <button on:click={openGame}>Join</button>
{/if}
