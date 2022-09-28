<script lang="ts">
  import { onMount } from "svelte";
  import { show } from "./game/game-store";
  import { showJoinGameInfo } from "./into-game/into-game-store";
  import { getURLId } from "./utils";

  import Board from "./game/Board.svelte";
  import Into from "./into-game/IntoGame.svelte";
  import Header from "./game/Header.svelte";

  // onMount action
  onMount(() => {
    if (getURLId()) showJoinGameInfo.set(true);
  });
</script>

<main>
  {#if $show}
    <Header />
    <Board />
  {:else}
    <Into />
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
