<script lang="ts">
  import { data } from "../game-store";
  import { scale } from "svelte/transition";

  import XC from "../../assets/XC.svelte";
  import OC from "../../assets/OC.svelte";
</script>

<section class="players">
  <div class="left">
    <div class="icon-bg" />
    <div class="player">
      <div class="ibox">
        <XC />
      </div>
      <div class="score">{$data.scoreX}</div>
    </div>
  </div>
  <div class="right">
    <div class="icon-bg" />
    <div class="player">
      <div class="score">{$data.scoreO}</div>
      <div class="ibox">
        <OC />
      </div>
    </div>
  </div>
</section>

<style>
  .players {
    display: flex;
    justify-content: space-between;
    max-width: 480px;
    width: 100%;
    padding: 20px 0;
    transition: transform 300ms;
  }

  .left,
  .right {
    height: 75px;
    position: relative;
  }

  .player {
    display: flex;
    column-gap: 3px;
    width: 100%;
    height: 100%;
    background: black;
    border: 3px solid black;
  }

  .ibox {
    width: 75px;
  }

  .score {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75px;
    font-size: 55px;
    font-weight: 700;
  }

  .left .ibox,
  .left .score {
    background: var(--green-extra-light);
  }
  .right .ibox,
  .right .score {
    background: var(--pink-extra-light);
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
</style>
