<script context="module" lang="ts">
  import { id, data, player } from "../game-store";

  import type { IGame } from "../../../firebase/types";
  import type { Moves, Turn } from "../../types";
</script>

<script lang="ts">
  import { scale } from "svelte/transition";
  import { onDisconnect, onValue, ref } from "firebase/database";

  import { winLogic } from "../../utils";
  import { db, updateGame } from "../../../firebase/db";

  import X from "../../assets/X.svelte";
  import O from "../../assets/O.svelte";

  // Data used locally
  let turn: Turn;
  let moves: Moves;
  let scoreX: number;
  let scoreO: number;

  // Initializing sounds
  const clickSound = new Audio("../../../assets/sounds/click.wav");
  const winSound = new Audio("../../../assets/sounds/win.mp3");

  // Getting realtime data by firebase snapshot
  if ($id) {
    onValue(ref(db, $id), (res) => {
      if (res.exists()) {
        $data = res.val() as IGame;
      } else {
        $data.host.isDisconnected = true;
      }
    });
  }

  // Removing if host disconnects
  if ($player === "X") onDisconnect(ref(db, $id)).remove();

  // Setting disconnection to true if friend disconnects
  if ($player === "O")
    onDisconnect(ref(db, $id)).update({ "friend/isDisconnected": true });

  // Change turn function
  const changeTurn = () => (turn = $data.turn === "X" ? "O" : "X");

  // Cell click action
  const onClick = (i: number) => {
    // Disabling move if player is disconncted'
    if ($data.host.isDisconnected || $data.friend.isDisconnected) return;

    // Checking if previous game is win or draw and ending it
    if ($data.isWin || $data.isDraw) return endGame();

    // Checking if player whose turn is clicking
    if ($player !== $data.turn) return;

    // Returning if cell is not empty
    if ($data.moves[i].value) return;

    // Making cell value equal to the current turn
    clickSound.play();
    moves = $data.moves;
    moves[i] = { value: $data.turn, state: "" };

    // Changing turn
    changeTurn();

    // Updating data in db
    updateGame($id, { moves, turn });

    // Checking for win
    checkWin();
  };

  // Winning move check function
  const checkWin = () => {
    winSound.play();
    loopLogic() || checkDraw();
  };

  // Looping over the all possible combinations
  const loopLogic = () => {
    // Returning value
    let returnVal: boolean;

    winLogic.forEach(([a, b, c]) => {
      // Getting value of the combination
      const move = moves[a].value;
      const moveA = moves[a].value;
      const moveB = moves[b].value;
      const moveC = moves[c].value;

      // Returning if value is empty
      if (!move) return (returnVal = false);

      // Checking if all values are equal
      if (moveA === moveB && moveA === moveC) {
        // Updating score
        scoreX = $data.scoreX;
        scoreO = $data.scoreO;
        move === "X" ? (scoreX = scoreX + 1) : (scoreO = scoreO + 1);

        // Adding win and lose state to the individual moves
        moves = moves.map((v, i) => {
          if (i === a || i === b || i === c) return { value: move, state: "W" };
          else return { value: v.value, state: "L" };
        });

        // Updating data online
        updateGame($id, { moves, scoreX, scoreO, isWin: true, winner: move });
        return (returnVal = true);
      } else return (returnVal = false);
    });

    return returnVal;
  };

  // Draw check function
  const checkDraw = () => {
    if (moves.every((v) => v.value !== "")) {
      updateGame($id, { isDraw: true });
      return;
    }
  };

  // Ending the game
  const endGame = () => {
    // Emptying the moves array
    moves = moves.fill({ value: "", state: "" });

    // Updating round
    const round = $data.round + 1;

    // Updating data online
    updateGame($id, { moves: moves, isDraw: false, isWin: false, round });
  };

  // Cell in and out animation
  const anim = {
    in: { duration: 100, opacity: 0.4 },
    out: { duration: 0 },
  };
</script>

<section>
  <div class="board-bg" />
  <div class="board">
    {#each $data.moves as { value, state }, i}
      <div
        class="cell"
        on:click={() => onClick(i)}
        class:lose={state === "L"}
        class:win={state === "W"}
        class:draw={$data.isDraw}
      >
        {#if value}
          <span in:scale={anim.in} out:scale={anim.out}>
            <svelte:component this={value === "X" ? X : O} />
          </span>
        {/if}
      </div>
    {/each}
  </div>
</section>

<style>
  section {
    max-width: 430px;
    width: 100%;
    aspect-ratio: 1/1;
    position: relative;
  }

  .board {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 4px;
    width: 100%;
    height: 100%;
    margin-bottom: 30px;
    background-color: black;
    border: 4px solid;
  }

  .board-bg {
    position: absolute;
    z-index: -1;
    top: 4px;
    left: 4px;
    width: 100%;
    height: 100%;
    background: black;
  }

  .cell {
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    cursor: pointer;
  }

  span {
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
  }

  .win > span {
    filter: brightness(0.8);
  }

  .lose > span,
  .draw > span {
    opacity: 0.5;
  }

  @media (max-width: 600px) {
    section {
      max-width: 380px;
    }
  }
</style>
