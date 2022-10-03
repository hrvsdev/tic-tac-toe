<script lang="ts">
  import { Share } from "tabler-icons-svelte";
  import { id } from "../../game/game-store";
</script>

<section class="share-wrapper">
  <div class="share-bg" />
  <div class="share"><Share size="26"/> Share</div>
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
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 10px;
    border: 3px solid black;
    background: #fbdba7;
    padding: 0 10px;
    font-size: 22px;
    font-weight: 500;
  }

  @media (max-width: 600px) {
    .share-wrapper {
      max-width: 380px;
      height: 48px;
    }

    .share {
      font-size: 20px;
    }
  }
</style>
