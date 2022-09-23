<script lang="ts" context="module">
  import { writable } from "svelte/store";

  import Board from "./game/Board.svelte";
  import CreateGame from "./join-game/JoinGame.svelte";
  import Header from "./game/Header.svelte";

  // Show game
  export const show = writable(false);
</script>

<main>
  {#if $show}
    <Header />
    <Board />
  {:else}
    <CreateGame />
  {/if}
</main>

<style>
  main {
    display: flex;
    width: 100vw;
    min-height: 100vh;
    align-items: center;
    flex-direction: column;
  }
</style>
