<script lang="ts">
  import { scale } from "svelte/transition";
  import { winLogic } from "./utils";

  import type { Moves, Turn } from "./types";
  import { validate_each_argument } from "svelte/internal";

  // Turn of the game
  let turn: Turn = "X";

  // Moves of the Tic Tac Toe Board
  let moves: Moves = Array(9).fill({ value: "", state: null });

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
    if (moves[i].value) return;

    // Making cell value equal to the current turn
    moves[i] = { value: turn, state: null };

    // Changing turn and checking for win
    changeTurn();
    checkWin();
  };

  // Winning move check function
  const checkWin = () => {
    // Looping over the all possible combinations
    winLogic.forEach(([a, b, c]) => {
      // Getting value of the combination
      const moveA = moves[a].value;
      const moveB = moves[b].value;
      const moveC = moves[c].value;

      // Returning if value is empty
      if (!moveA) return;

      // Checking if all values are equal
      if (moveA === moveB && moveA === moveC) {
        // Setting winner and making win state true
        winner = moveA;
        moves = moves.map((v, i) => {
          switch (i) {
            case a:
              return { value: moveA, state: "W" };
            case b:
              return { value: moveB, state: "W" };
            case c:
              return { value: moveC, state: "W" };
            default:
              return { value: v.value, state: "L" };
          }
        });
        isWin = true;
        return;
      }
      // If loop doesn't return, making game draw if all values are filled
      // if (moves.every((v) => v.value !== null)) return (isDraw = true);
    });
  };

  // Ending the game
  const endGame = () => {
    // Emptying the moves array
    moves = moves.fill({ value: null, state: null });

    // Setting win and draw state to false
    isWin = false;
    isDraw = false;
  };

  // Cell in and out animation
  const anim = {
    in: { duration: 100 },
    out: { duration: 0 },
  };
</script>

<section class="container">
  {#each moves as { value, state }, i}
    <div on:click={() => onClick(i)} class:lose={state === "L"} class:draw={isDraw}>
      {#if value}
        <span in:scale={anim.in} out:scale={anim.out} class:win={state === "W"}>
          {value}
        </span>
      {/if}
    </div>
  {/each}
</section>
{#if isWin || isDraw}
  <p>{isWin ? `Player ${winner} won!` : `Nobody won! Game Drawn!`}</p>
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
    justify-content: center;
    align-items: center;
    background-color: white;
    cursor: pointer;
  }

  .lose {
    color: rgb(170, 170, 170);
  }

  .win {
    animation: blink 300ms steps(1) 3;
  }

  @keyframes blink {
    50% {
      visibility: hidden;
    }
  }

  .draw {
    color: rgb(170, 170, 170);
  }

  span {
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 110px;
    transition: opacity 0.1s;
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

    span {
      font-size: 80px;
    }

    p {
      font-size: 20px;
    }
  }
</style>
