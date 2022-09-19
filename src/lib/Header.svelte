<script lang="ts">
  import { scoreO, scoreX } from "./Board.svelte";
</script>

<div class="header">
  <div class="left">
    <div class="player">PLAYER (X)</div>
    <div class="score">{$scoreX}</div>
  </div>
  <div class="center" />
  <div class="right">
    <div class="player">PLAYER (O)</div>
    <div class="score">{$scoreO}</div>
  </div>
</div>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 458px;
    width: 100%;
    height: 140px;
    margin-bottom: 50px;
  }

  .player {
    font-size: 20px;
    margin-bottom: 8px;
  }

  .score {
    font-size: 30px;
    text-align: center;
  }
</style>
