<script>
  import Board from "./board/Board.svelte";
  import Chat from "./chat/Chat.svelte";
  import Players from "./players/Players.svelte";
  import Share from "./share/Share.svelte";
  import Status from "./status/Status.svelte";
</script>

<div>
  <Players />
  <Board />
  <Status />
  <section>
    <Chat />
    <Share />
  </section>
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

  section {
    margin-top: -10px;
    max-width: 430px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  @media (max-width: 600px) {
    section {
      flex-direction: column;
    }
  }
</style>
