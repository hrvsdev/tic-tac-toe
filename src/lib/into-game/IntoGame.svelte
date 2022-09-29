<script lang="ts">
  import { showCreateGameInfo, showJoinGameInfo } from "./into-game-store";

  import Header from "./header/Header.svelte";
  import CreateGame from "./create-game/CreateGame.svelte";
  import CreateGameInfo from "./create-game/CreateGameInfo.svelte";
  import JoinGame from "./join-game/JoinGame.svelte";
  import JoinGameInfo from "./join-game/JoinGameInfo.svelte";
</script>

<Header />
<section>
  {#if $showCreateGameInfo}
    <CreateGameInfo />
  {:else if $showJoinGameInfo}
    <JoinGameInfo />
  {:else}
    <CreateGame />
    <JoinGame />
  {/if}
</section>

<style>
  section {
    max-width: 870px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(315px, 1fr));
    gap: 30px;
    padding: 0 20px;
  }

  @media (max-width: 500px) {
    section {
      grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
    }
  }
</style>
