<script lang="ts">
  import { winLogic } from "./utils";
  import type { Move, Turn } from "./types";

  let turn: Turn = "X";
  let win = false;
  let array: Move[] = Array(9).fill("");
  const changeTurn = () => (turn = turn === "X" ? "O" : "X");

  const onClick = (i: number) => {
    if (win) (array = Array(9).fill("")), (win = false);
    if (array[i] !== "") return;
    array[i] = turn;
    changeTurn();
    checkWin();
  };

  const checkWin = () => {
    winLogic.forEach(([a, b, c]) => {
      if (array[a] && array[a] === array[b] && array[b] === array[c]) return;
    });
  };
</script>

<section class="container">
  {#each array as move, i}
    <div on:click={() => onClick(i)}>
      {move}
    </div>
  {/each}
</section>
{#if win}
  <p>There is a win!</p>
{/if}

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
