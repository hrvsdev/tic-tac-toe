<script lang="ts">
  import { data } from "./game-store";
  import { scale } from "svelte/transition";

  import XC from "../assets/XC.svelte";
  import OC from "../assets/OC.svelte";
</script>

<div class="header">
  <div class="left">
    <div class="icon-bg" />
    <div class="ibox">
      <XC />
    </div>
  </div>
  <div class="center">
    <div class="score-bg" />
    <div class="score-box">
      <h1 class="score">{$data.scoreX} - {$data.scoreO}</h1>
    </div>
  </div>
  <div class="right">
    <div class="icon-bg" />
    <div class="ibox">
      <OC />
    </div>
  </div>
</div>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    max-width: 480px;
    width: 100%;
    padding: 30px 20px;
    margin-bottom: 50px;
  }

  .left,
  .right {
    position: relative;
    width: 75px;
    height: 75px;
  }

  .ibox {
    width: 100%;
    height: 100%;
    border: 3px solid black;
    background: white;
  }

  .icon-bg,
  .score-bg {
    position: absolute;
    z-index: -1;
    top: 4px;
    left: 4px;
    width: 100%;
    height: 100%;
    background: black;
  }

  .center {
    position: relative;
    height: 75px;
  }

  .score-box {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 20px;
    border: 3px solid black;
    background: white;
  }
</style>
