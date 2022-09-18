<script lang="ts">
  import { winLogic } from "./utils";
  import type { Move, Turn } from "./types";

  let turn: Turn = "X";
  let isWin = false;
  let isDraw = false;
  let winner: Turn;
  let moves: Move[] = Array(9).fill("");

  const changeTurn = () => (turn = turn === "X" ? "O" : "X");

  const onClick = (i: number) => {
    if (isWin || isDraw) return onEnd();
    if (moves[i] !== "") return;
    moves[i] = turn;
    changeTurn();
    checkWin();
  };

  const checkWin = () => {
    if (moves.every((v) => v !== "")) return (isDraw = true);
    winLogic.forEach(([a, b, c]) => {
      const move = moves[a];
      if (move === "") return;
      if (moves[a] === moves[b] && moves[a] === moves[c]) {
        winner = move;
        isWin = true;
        return true;
      }
    });
  };

  const onEnd = () => {
    moves = Array(9).fill("");
    isWin = false;
    isDraw = false;
  };
</script>

<section class="container">
  {#each moves as move, i}
    <div on:click={() => onClick(i)}>
      {move}
    </div>
  {/each}
</section>
{#if isWin || isDraw}
  {#if isWin}
    <p>Player {winner} won!</p>
  {/if}
  {#if isDraw}
    <p>Nobody won! Game Drawn!</p>
  {/if}
{/if}

<style>
  section {
    width: 454px;
    height: 454px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 4px;
    margin-bottom: 30px;
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

  p {
    font-size: 30px;
    font-weight: 600;
  }
</style>
