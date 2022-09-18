<script lang="ts">
  type move = "X" | "O" | "";
  let turn: "O" | "X" = "X";
  let array: move[] = ["", "", "", "", "", "", "", "", ""];

  const changeTurn = () => (turn = turn === "X" ? "O" : "X");

  const onClick = (i: number) => {
    if (array[i] !== "") return;
    array[i] = turn;
    changeTurn();
  };
</script>

<section class="container">
  {#each array as move, i}
    <div
      on:click={() => {
        onClick(i);
      }}
    >
      {move}
    </div>
  {/each}
</section>

<style>
  section {
    width: 454px;
    height: 454px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 4px;
    background-color: black;
  }

  div {
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    font-size: 110px;
    background-color: white;
  }
</style>
