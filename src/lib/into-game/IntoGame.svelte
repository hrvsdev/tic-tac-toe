<script lang="ts">
  import Hero from "./header/Header.svelte";
  import CreateGame from "./create-game/CreateGame.svelte";
  import CreateGameInfo from "./create-game/CreateGameInfo.svelte";
  import JoinGame from "./join-game/JoinGame.svelte";
  import JoinGameInfo from "./join-game/JoinGameInfo.svelte";
</script>

<Hero/>
<section>
  <CreateGame/>
  <JoinGame/>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    row-gap: 50px;
    padding: 20px;
  }
</style>
