<script>
  import { copy } from "../../utils";

  const copyId = () => copy("text");

  const shareId = () => {
    navigator.share({
      title: "Tic Tac Toe - T3",
      text: "hello",
      url: "https://hrvs.me",
    });
  };
</script>

<div class="card-wrapper">
  <h3>Share your Game ID</h3>
  <div class="card-body">
    <p>
      <mark on:click={shareId}>Share</mark>
      this ID with your friend to connect to this game.
    </p>
    <div class="id-wrapper" on:click={copyId}>https://t3.hrvs.me/#572937</div>
  </div>
</div>

<style>
  .card-wrapper {
    outline: 2px solid var(--green-primary);
    background-color: var(--green-bg);
    box-shadow: var(--green-dark-light) 0px 4px 14px 0px;
    border-radius: 15px;
    overflow: hidden;
    max-width: 400px;
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
    color: black;
    letter-spacing: 0.5px;
    border-radius: 10px;
    padding: 10px 15px;
    background: var(--green-extra-light);
    text-align: center;
    transition: background 300ms, transform 150ms;
  }

  .id-wrapper:hover {
    background: var(--green-light);
  }

  .id-wrapper:active {
    transform: translateY(2px);
  }
</style>
