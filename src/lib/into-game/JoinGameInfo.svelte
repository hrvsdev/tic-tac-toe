<script>
  import { copy, genId } from "../../utils";

  const copyId = () => copy("text");
</script>

<div class="card-wrapper">
  <h3>Connect to the game via ID</h3>
  <div class="card-body">
    <p>
      Here is the ID from the link you entered. Do you want to connect to it or change it?
    </p>
    <input
      value={genId()}
      class="id-wrapper"
      inputmode="numeric"
      type="number"
      placeholder="Enter Game ID"
    />
  </div>
  <button>Connect</button>
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

  .id-wrapper {
    all: unset;
    width: 100%;
    box-sizing: border-box;
    cursor: initial;
    color: black;
    letter-spacing: 0.5px;
    border-radius: 10px;
    padding: 10px 15px;
    background: var(--pink-extra-light);
    text-align: center;
    font-weight: 600;
    font-size: 20px;
    transition: all 300ms;
  }

  .id-wrapper::placeholder {
    color: rgb(0 0 0/0.8);
    font-weight: 400;
    font-size: 17px;
  }

  .id-wrapper:focus {
    background: var(--pink-light);
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
    transition: all 300ms;
  }

  button:hover {
    filter: brightness(0.95);
  }
</style>
