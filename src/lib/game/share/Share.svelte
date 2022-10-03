<script lang="ts">
  import { id } from "../../game/game-store";
</script>

<section class="share-wrapper">
  <div class="share-bg" />
  <div class="share">Share</div>
</section>

<style>
  .share-wrapper {
    position: relative;
    max-width: 430px;
    width: 100%;
    height: 54px;
  }

  .share-bg {
    position: absolute;
    z-index: -1;
    top: 4px;
    left: 4px;
    width: 100%;
    height: 100%;
    background: black;
  }

  .share {
    display: flex;
    align-items: center;
    height: 100%;
    background: #fbdba7;
    padding: 0 10px;
    font-size: 22px;
    font-weight: 500;
  }

  @media (max-width: 600px) {
    .share-wrapper {
      max-width: 380px;
      height: 85px;
    }

    .share {
      font-size: 20px;
    }
  }
</style>
