<script context="module" lang="ts">
  import { writable } from "svelte/store";

  import type { IGame } from "src/firebase/types";
  import type { Writable } from "svelte/store";
  import type { Turn } from "./types";

  // Game data
  export const data: Writable<IGame> = writable({
    turn: "X",
    moves: Array(9).fill({ value: "", state: null }),
    scoreX: 0,
    scoreO: 0,
    host: "X",
    friend: "O",
    isWin: false,
    isDraw: false,
  });

  // Id of the game
  export const id = writable("");

  // Player status state
  export const player: Writable<Turn> = writable("X");
</script>

<script lang="ts">
  import { doc, onSnapshot } from "firebase/firestore";
  import { scale } from "svelte/transition";

  import { winLogic } from "./utils";
  import { games, updateGame } from "../firebase/db";

  // Getting realtime data by firebase snapshot
  if (id) {
    onSnapshot(doc(games, $id), (doc) => {
      $data = doc.data() as IGame;
    });
  }

  // Updating db data whenever the data changes locally
  $: updateGame($id, $data);

  // Change turn function
  const changeTurn = () => ($data.turn = $data.turn === "X" ? "O" : "X");

  // Cell click action
  const onClick = (i: number) => {
    // Checking if previous game is win or draw and ending it
    if ($data.isWin || $data.isDraw) return endGame();

    // Checking if player whose turn is clicking
    if($player !== $data.turn) return

    // Returning if cell is not empty
    if ($data.moves[i].value) return;

    // Making cell value equal to the current turn
    $data.moves[i] = { value: $data.turn, state: null };

    // Changing turn and checking for win
    changeTurn();
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
        // Setting winner
        if (move === "X") $data.scoreX = $data.scoreX + 1;
        else $data.scoreO = $data.scoreO + 1;

        // Adding win and lose state to the individual moves
        $data.moves = $data.moves.map((v, i) => {
          if (i === a || i === b || i === c) return { value: move, state: "W" };
          else return { value: v.value, state: "L" };
        });

        // Making win state true
        $data.isWin = true;
        return;
      }
      // If loop doesn't return, making game draw if all values are filled
      // if (moves.every((v) => v.value !== null)) return (isDraw = true);
    });
  };

  // Ending the game
  const endGame = () => {
    // Emptying the moves array
    $data.moves = $data.moves.fill({ value: null, state: null });

    // Setting win and draw state to false
    $data.isWin = false;
    $data.isDraw = false;
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
