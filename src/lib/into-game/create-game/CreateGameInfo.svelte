<script lang="ts">
  import { id } from "../../game/game-store";
  import { show } from "../../game/game-store";
  import { copy } from "../../../utils";

  import IconCopy from "~icons/tabler/clipboard"

  // URL with id
  const url = window.location.href + "#" + $id;

  // Copy id button action
  const copyId = () => copy(url);

  // Id share action
  const shareId = () => {
    navigator.share({
      title: "Tic Tac Toe - T3",
      text: url,
      url: url,
    });
  };

  // Button click action
  const onClick = () => {
    show.set(true);
  };
</script>

<div class="card-wrapper">
  <h3>Share your Game ID</h3>
  <div class="card-body">
    <p>
      <mark on:click={shareId}>Share</mark>
      this ID with your friend to connect to this game.
    </p>
    <div class="id-wrapper" on:click={copyId}>
      {window.location.href}#<span>{$id}</span>
      <IconCopy color="red" height="auto"/>
    </div>
  </div>
  <button on:click={onClick}>Continue</button>
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

  .card-body {
    padding: 25px 20px;
    font-size: 17px;
    color: rgba(0 0 0/0.8);
  }

  p {
    margin-bottom: 20px;
  }

  mark {
    background: transparent;
    cursor: pointer;
    color: var(--green-text);
    text-decoration: underline;
    text-underline-offset: 5px;
    transition: all 300ms;
  }

  mark:hover {
    filter: brightness(0.7);
  }

  .id-wrapper {
    cursor: pointer;
    color: rgba(0 0 0/0.7);
    letter-spacing: 0.5px;
    border-radius: 10px;
    padding: 12px 15px;
    background: var(--green-extra-light);
    text-align: center;
    transition: background 300ms, transform 100ms;
  }

  .id-wrapper > span {
    color: black;
    font-weight: bold;
  }

  .id-wrapper:hover {
    background: var(--green-light);
  }

  .id-wrapper:active {
    transform: translateY(2px);
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
