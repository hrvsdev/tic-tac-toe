<script lang="ts">
  import CreateGame from "./CreateGame.svelte";
  import JoinGame from "./JoinGame.svelte";
</script>

<section>
  <CreateGame />
  <JoinGame />
</section>

<style>section{
  display: flex;
  flex-direction: column;
  row-gap: 50px;
}</style>