<script>
  import Board from "./Board.svelte";
  import Header from "./Header.svelte";
</script>

<main>
  <Header/>
  <Board />
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
