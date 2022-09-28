<script lang="ts">
  import { showCreateGameInfo } from "../into-game-store";

  import createGame from "../../../commands/createGame";

  // Button click action
  const onClick = () => {
    createGame()
    showCreateGameInfo.set(true);
  };
</script>

<div class="card-wrapper">
  <h3>Create a new game</h3>
  <p>Create a new game and invite your friends to play or only spectate.</p>
  <button on:click={onClick}>Create</button>
</div>

<style>
  .card-wrapper {
    outline: 2px solid var(--green-primary);
    background-color: var(--green-bg);
    box-shadow: var(--green-dark-light) 0px 4px 14px 0px;
    border-radius: 15px;
    overflow: hidden;
    width: 100%;
  }

  h3 {
    padding: 12px 20px;
    font-size: 19px;
    font-weight: 500;
    border-bottom: 2px solid var(--green-primary);
  }

  p {
    padding: 25px 20px;
    font-size: 17px;
    color: rgba(0 0 0/0.8);
  }

  button {
    all: unset;
    width: 100%;
    cursor: pointer;
    box-sizing: border-box;
    font-size: 17px;
    font-weight: 500;
    padding: 12px 20px;
    text-align: center;
    color: white;
    background-color: var(--green-primary);
    transition: filter 300ms, transform 100ms;
  }

  button:hover {
    filter: brightness(0.95);
  }

  button:active {
    transform: translateY(2px);
  }
</style>
