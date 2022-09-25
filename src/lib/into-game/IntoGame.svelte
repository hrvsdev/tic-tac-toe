<script lang="ts">
  import CreateGame from "./CreateGame.svelte";
  import JoinGame from "./JoinGame.svelte";
  import JoinGameInfo from "./CreateGameInfo.svelte";
</script>

<section>
  <JoinGameInfo/>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    row-gap: 50px;
    padding: 20px;
  }
</style>
