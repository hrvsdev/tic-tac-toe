<script lang="ts">
  let turn: "O" | "X" = "X";
  
</script>

<div class="container">
  <div class="cell">X</div>
  <div class="cell">O</div>
  <div class="cell">X</div>
  <div class="cell">O</div>
  <div class="cell">X</div>
  <div class="cell">O</div>
  <div class="cell">X</div>
  <div class="cell">O</div>
  <div class="cell">X</div>
</div>

<style>
  .container {
    width: 454px;
    height: 454px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 4px;
    background-color: black;
  }

  .cell {
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    font-size: 110px;
    background-color: white;
  }
</style>
