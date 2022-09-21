<script context="module" lang="ts">
  import { writable } from "svelte/store";

  import type { IGame } from "src/firebase/types";
  import type { Writable } from "svelte/store";
  import type { Moves, Turn } from "./types";

  // Game data used for sharing between players via db
  export const data: Writable<IGame> = writable({
    // Current turn
    turn: "X",

    // Moves of the board
    moves: Array(9).fill({ value: null, state: null }),

    // Current scores of players
    scoreX: 0,
    scoreO: 0,

    // Host and friend value
    host: "X",
    friend: "O",

    // Current game win and draw state
    isWin: false,
    isDraw: false,
  });

  // Id of the game
  export const id = writable("");

  // Player status state
  export const player: Writable<Turn> = writable("X");
</script>

<script lang="ts">
  import { doc, increment, onSnapshot } from "firebase/firestore";
  import { scale } from "svelte/transition";

  import { winLogic } from "./utils";
  import { games, updateGame } from "../firebase/db";

  // Data used locally
  let turn: Turn = "X";
  let moves: Moves = Array(9).fill({ value: null, state: null });
  let scoreX = 0;
  let scoreO = 0;

  // Getting realtime data by firebase snapshot
  if ($id) {
    onSnapshot(doc(games, $id), (doc) => {
      $data = doc.data() as IGame;
    });
  }

  // Change turn function
  const changeTurn = () => (turn = $data.turn === "X" ? "O" : "X");

  // Cell click action
  const onClick = (i: number) => {
    // Checking if previous game is win or draw and ending it
    if ($data.isWin || $data.isDraw) return endGame();

    // Checking if player whose turn is clicking
    if ($player !== $data.turn) return;

    // Returning if cell is not empty
    if ($data.moves[i].value) return;

    // Making cell value equal to the current turn
    moves = $data.moves;
    moves[i] = { value: turn, state: null };

    // Changing turn and checking for win
    changeTurn();

    // Updating data in db
    updateGame($id, { moves, turn });

    // Checking for win
    checkWin();
  };

  // Winning move check function
  const checkWin = () => {
    // Looping over the all possible combinations
    winLogic.forEach(([a, b, c]) => {
      // Getting value of the combination
      const move = $data.moves[a].value;
      const moveA = $data.moves[a].value;
      const moveB = $data.moves[b].value;
      const moveC = $data.moves[c].value;

      // Returning if value is empty
      if (!move) return;

      // Checking if all values are equal
      if (moveA === moveB && moveA === moveC) {
        // Updating score
        if (move === "X") scoreX = $data.scoreX + 1;
        else scoreO = $data.scoreO + 1;

        // Adding win and lose state to the individual moves
        moves = moves.map((v, i) => {
          if (i === a || i === b || i === c) return { value: move, state: "W" };
          else return { value: v.value, state: "L" };
        });

        // Updating data online
        updateGame($id, { moves, scoreX, scoreO, isWin: true });
      }
      // If loop doesn't return, making game draw if all values are filled
      // if (moves.every((v) => v.value !== null)) return (isDraw = true);
    });
  };

  // Ending the game
  const endGame = () => {
    // Emptying the moves array
    moves = moves.fill({ value: null, state: null });

    // Updating data online
    updateGame($id, { moves, isDraw: false, isWin: false });
  };

  // Cell in and out animation
  const anim = {
    in: { duration: 100, opacity: 0.4 },
    out: { duration: 0 },
  };
</script>

<section class="container">
  {#each $data.moves as { value, state }, i}
    <div on:click={() => onClick(i)} class:lose={state === "L"} class:draw={$data.isDraw}>
      {#if value}
        <span in:scale={anim.in} out:scale={anim.out}>
          {value}
        </span>
      {/if}
    </div>
  {/each}
</section>

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

  span {
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 110px;
  }

  .lose > span,
  .draw > span {
    color: rgb(170, 170, 170);
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  @media (max-width: 600px) {
    section {
      width: 308px;
      height: 308px;
    }

    span {
      font-size: 80px;
    }
  }
</style>
