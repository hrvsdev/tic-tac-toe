<script lang="ts">
  import { data } from "./game-store";
  import { scale } from "svelte/transition";

  import XC from "../assets/XC.svelte";
  import OC from "../assets/OC.svelte";
</script>

<div class="header">
  <div class="left">
    <div class="icon-bg" />
    <div class="player">
      <XC />
    </div>
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
    <div class="icon-bg" />
    <div class="player">
      <OC/>
    </div>
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

  .left,
  .right {
    position: relative;
  }

  .player {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75px ;
    height: 75px ;
    border: 3px solid black;
    background: white;
  }

  .icon-bg {
    position: absolute;
    z-index: -1;
    top: 4px;
    left: 4px;
    width: 100%;
    height: 100%;
    background: black;
  }

  .score {
    font-size: 30px;
    text-align: center;
  }
</style>
