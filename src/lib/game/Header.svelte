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
    <div class="top">
      <h3 class="score-text">SCORE</h3>
    </div>
    <div class="bottom">
      <h1 class="score">
        <span>2</span>
        <span>-</span>
        <span>6</span>
      </h1>
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
    height: fit-content;
  }

  .ibox {
    width: 75px;
    height: 75px;
    border: 3px solid black;
    background: white;
  }

  .icon-bg {
    position: absolute;
    z-index: -1;
    top: 4px;
    left: 4px;
    width: 75px;
    height: 75px;
    background: black;
  }

  .center > .top {
    text-align: center;
    color: rgba(0 0 0/0.8);
    margin-bottom: 10px;
  }

  .score {
    font-size: 50px;
    line-height: 40px;
  }
</style>
