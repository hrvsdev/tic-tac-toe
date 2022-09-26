<script lang="ts">
  import { copy, genId } from "../../utils";

  // Input element
  let inputEl: HTMLInputElement;

  // Input states
  let error = false;
  let loading = false;

  // Focus input
  const focusInput = () => inputEl.focus();

  // Form submit action
  const onSubmit = () => {
    loading = true;
    setTimeout(() => {
      (loading = false), (error = true);
    }, 2000);
  };
</script>

<div class="card-wrapper">
  <form on:submit|preventDefault={onSubmit}>
    <h3>Connect to the game via ID</h3>
    <div class="card-body">
      <p>
        Here is the ID from the link. Do you want to
        <mark on:click={focusInput}>change it</mark> or connect?
      </p>
      <input
        value={genId()}
        bind:this={inputEl}
        on:focus={() => (error = false)}
        class:error
        inputmode="numeric"
        type="number"
        placeholder="Enter Game ID"
      />
      {#if error}
        <div class="error">
          Game not found! It means that the game is deleted or never created.
        </div>
      {/if}
    </div>
    <button disabled={loading}>
      {#if loading}
        <span class="loader" />
      {:else}
        <span>Continue</span>
      {/if}
    </button>
  </form>
</div>

<style>
  .card-wrapper {
    outline: 2px solid var(--pink-primary);
    background-color: var(--pink-bg);
    box-shadow: var(--pink-dark-light) 0px 4px 14px 0px;
    border-radius: 15px;
    overflow: hidden;
    max-width: 400px;
  }

  h3 {
    padding: 12px 20px;
    font-size: 19px;
    font-weight: 500;
    border-bottom: 2px solid var(--pink-primary);
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
    color: var(--pink-text);
    text-decoration: underline;
    text-underline-offset: 5px;
  }

  mark:hover {
    filter: brightness(0.7);
  }

  input {
    all: unset;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    cursor: initial;
    color: black;
    letter-spacing: 0.5px;
    border-radius: 10px;
    padding: 10px 15px;
    background: var(--pink-extra-light);
    text-align: center;
    font-weight: 600;
    font-size: 20px;
    transition: background 300ms;
  }

  input:placeholder {
    color: rgb(0 0 0/0.8);
    font-weight: 400;
    font-size: 17px;
  }

  input:focus {
    background: var(--pink-light);
  }

  input.error {
    outline: 2px solid var(--red-primary);
    background: var(--red-extra-light);
  }

  div.error {
    font-size: 15px;
    margin-top: 10px;
    color: var(--red-primary);
    line-height: normal;
  }

  button {
    all: unset;
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    font-size: 17px;
    font-weight: 500;
    color: white;
    background-color: var(--pink-primary);
    transition: filter 300ms, transform 100ms;
  }

  button:enabled {
    cursor: pointer;
  }

  button:enabled:hover {
    filter: brightness(0.95);
  }

  button:enabled:active {
    transform: translateY(2px);
  }

  .loader {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: inline-block;
    border-top: 3px solid #fff;
    border-right: 3px solid transparent;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
