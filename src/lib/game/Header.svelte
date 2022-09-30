<script lang="ts">
  import { data } from "./game-store";
  import { scale } from "svelte/transition";

  import XC from "../assets/XC.svelte";
</script>

<div class="header">
  <div class="left">
    <div class="player"><div class="x-icon"><XC/></div></div>
    {#key $data.scoreX}
      <div in:scale class="score">{$data.scoreX}</div>
    {/key}
  </div>
  <div class="center">
    <div class="player">DRAW</div>
    {#key $data.draw}
      <div in:scale class="score">
        {$data.draw}
      </div>
    {/key}
  </div>
  <div class="right">
    <div class="player">PLAYER (O)</div>
    {#key $data.scoreO}
      <div in:scale class="score">
        {$data.scoreO}
      </div>
    {/key}
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
