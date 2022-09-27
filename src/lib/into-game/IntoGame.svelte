<script lang="ts">
  import Hero from "./Hero.svelte";
  import CreateGame from "./CreateGame.svelte";
  import JoinGame from "./JoinGame.svelte";
  import CreateGameInfo from "./CreateGameInfo.svelte";
  import JoinGameInfo from "./JoinGameInfo.svelte";
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
