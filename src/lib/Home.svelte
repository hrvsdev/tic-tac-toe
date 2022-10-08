<script lang="ts">
  import { onMount } from "svelte";
  import { show } from "../stores/game-store";
  import { showJoinGameInfo } from "./into-game/into-game-store";
  import { getURLId } from "../utils";

  import Game from "./game/Game.svelte";
  import Into from "./into-game/IntoGame.svelte";

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
