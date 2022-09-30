<script>
  import Board from "./board/Board.svelte";
  import Players from "./players/Players.svelte";
  import Status from "./status/Status.svelte";
</script>

<div>
  <Players />
  <Board />
  <Status />
</div>

<style>
  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    row-gap: 30px;
    transform-origin: top;
  }
  @media (max-width: 600px) {
    div {
      transform: scale(0.8);
    }
  }
</style>
