<script>
  import Board from "./board/Board.svelte";
  import Players from "./players/Players.svelte";
  import Share from "./share/Share.svelte";
  import Status from "./status/Status.svelte";
</script>

<div>
  <Players />
  <Board />
  <Status />
  <div>
    <Share />
  </div>
</div>

<style>
  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 30px;
    padding: 20px;
    transform-origin: top;
  }
</style>
