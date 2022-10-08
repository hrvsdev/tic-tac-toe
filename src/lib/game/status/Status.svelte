<script lang="ts">
  import { data, status } from "../../../stores/game-store";
</script>

<section class="info-wrapper">
  <div class="info-bg" />
  <div class="info">
    <div class="round"><span>Round</span>{$data.round}</div>
    <div class="status">{$status}</div>
  </div>
</section>

<style>
  .info-wrapper {
    position: relative;
    max-width: 430px;
    width: 100%;
    height: 54px;
  }

  .info-bg {
    position: absolute;
    z-index: -1;
    top: 4px;
    left: 4px;
    width: 100%;
    height: 100%;
    background: black;
  }

  .info {
    display: flex;
    gap: 3px;
    width: 100%;
    height: 100%;
    border: 3px solid black;
    background: black;
  }

  .round,
  .status {
    display: flex;
    align-items: center;
    height: 100%;
    background: #fbdba7;
    padding: 0 10px;
    font-size: 22px;
    font-weight: 500;
  }

  .round {
    font-weight: 700;
  }

  .round > span {
    margin-right: 5px;
  }

  .status {
    flex-grow: 1;
  }

  @media (max-width: 600px) {
    .info-wrapper {
      max-width: 380px;
      height: 85px;
    }

    .info {
      flex-direction: column;
    }

    .round,
    .status {
      justify-content: center;
      font-size: 20px;
    }
  }
</style>
