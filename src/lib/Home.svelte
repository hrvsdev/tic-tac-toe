<script lang="ts" context="module">
  import { writable } from "svelte/store";

  import Board from "./Board.svelte";
  import CreateGame from "./CreateGame.svelte";
  import Header from "./Header.svelte";

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
