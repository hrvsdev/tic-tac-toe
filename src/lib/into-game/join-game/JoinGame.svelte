<script lang="ts">
	import { goto } from "$app/navigation";

  // Button click action
  const onClick = () => goto("/join");
</script>

<div class="card-wrapper">
  <h3>Join an existing game</h3>
  <p>
    Join the game that your friend already created by the <strong>code</strong>.
  </p>
  <button on:click={onClick}>Join</button>
</div>

<style>
  .card-wrapper {
    outline: 2px solid var(--pink-primary);
    background-color: var(--pink-bg);
    box-shadow: var(--pink-dark-light) 0px 4px 14px 0px;
    border-radius: 15px;
    overflow: hidden;
    width: 100%;
  }

  h3 {
    padding: 12px 20px;
    font-size: 19px;
    font-weight: 500;
    border-bottom: 2px solid var(--pink-primary);
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
    background-color: var(--pink-primary);
    transition: filter 300ms, transform 100ms;
  }

  button:hover {
    filter: brightness(0.95);
  }

  button:active {
    transform: translateY(2px);
  }
</style>
