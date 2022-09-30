<script lang="ts">
  import { onMount } from "svelte";
  import { show } from "./game/game-store";
  import { showJoinGameInfo } from "./into-game/into-game-store";
  import { getURLId } from "./utils";

  import Into from "./into-game/IntoGame.svelte";
  import Game from "./game/Game.svelte";

  // onMount action
  onMount(() => {
    if (getURLId()) showJoinGameInfo.set(true);
  });
</script>

<main>
  {#if $show}
    <Game />
  {:else}
    <Into />
  {/if}
</main>

<style>
  main {
    width: 100vw;
  }
</style>
