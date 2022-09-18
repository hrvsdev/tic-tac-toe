<script lang="ts">
  import { winLogic } from "./utils";
  import type { Move, Turn } from "./types";

  // Turn of the game
  let turn: Turn = "X";

  // Moves of the Tic Tac Toe Board
  let moves: Move[] = Array(9).fill("");

  // Winner of the game
  let winner: Turn;

  // Win and draw state
  let isWin = false;
  let isDraw = false;

  // Change turn function
  const changeTurn = () => (turn = turn === "X" ? "O" : "X");

  // Cell click action
  const onClick = (i: number) => {
    // Checking if previous game is win or draw and ending it
    if (isWin || isDraw) return endGame();

    // Returning if cell is not empty
    if (moves[i] !== "") return;

    // Making cell value equal to the current turn
    moves[i] = turn;

    // Changing turn and checking for win
    changeTurn();
    checkWin();
  };

  // Winning move check function
  const checkWin = () => {
    // Looping over the all possible combinations
    winLogic.forEach(([a, b, c]) => {
      // Getting value of the first cell of combination
      const move = moves[a];

      // Returning if value is empty
      if (move === "") return;

      // Checking if all values are equal
      if (moves[a] === moves[b] && moves[a] === moves[c]) {
        // Setting winner and making win state true
        winner = move;
        isWin = true;
        return true;
      }
    });

    // If loop doesn't return, making game draw if all values are filled
    if (moves.every((v) => v !== "")) return (isDraw = true);
  };

  // Ending the game
  const endGame = () => {
    // Emptying the moves array
    moves = Array(9).fill("");

    // Setting win and draw state to false
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
    width: 458px;
    height: 458px;
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
    position: absolute;
    font-size: 30px;
    font-weight: 600;
    bottom: 60px;
  }

  @media (max-width: 600px) {
    section {
      width: 308px;
      height: 308px;
    }

    div {
      font-size: 80px;
    }

    p {
      font-size: 20px;
    }
  }
</style>
