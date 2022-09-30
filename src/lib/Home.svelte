<script lang="ts">
  import { onMount } from "svelte";
  import { show } from "./game/game-store";
  import { showJoinGameInfo } from "./into-game/into-game-store";
  import { getURLId } from "./utils";

  import Board from "./game/board/Board.svelte";
  import Into from "./into-game/IntoGame.svelte";
  import Players from "./game/players/Players.svelte";
  import Status from "./game/status/Status.svelte";

  // onMount action
  onMount(() => {
    if (getURLId()) showJoinGameInfo.set(true);
  });
</script>

<main>
  {#if $show}
    <Players />
    <Board />
    <Status/>
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
