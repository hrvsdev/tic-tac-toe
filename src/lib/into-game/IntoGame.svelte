<script lang="ts">
  import { showCreateGameInfo } from "./into-game-store";
  import Hero from "./header/Header.svelte";
  import CreateGame from "./create-game/CreateGame.svelte";
  import CreateGameInfo from "./create-game/CreateGameInfo.svelte";
  import JoinGame from "./join-game/JoinGame.svelte";
  import JoinGameInfo from "./join-game/JoinGameInfo.svelte";
</script>

<Hero />
<section>
  {#if $showCreateGameInfo}
    <CreateGameInfo />
  {:else}
    <CreateGame />
  {/if}
  <CreateGame />
  <JoinGame />
</section>

<style>
  section {
    max-width: 870px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 30px;
    padding: 0 20px;
  }
</style>
