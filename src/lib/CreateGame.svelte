<script lang="ts">
  import { newGame } from "src/firebase/db";
  import { gameData } from "./Board.svelte";

  const createGame = () => {
    const game
    newGame({
      scoreX: 0,
      scoreY: 0,
      host: "X",
      friend: "O",
      turn: "X",
      moves: [],
    });
  };
</script>

<h1>Create a new game</h1>

<button on:click={createGame}>Create</button>
