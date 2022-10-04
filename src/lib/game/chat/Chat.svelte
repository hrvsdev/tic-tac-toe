<script lang="ts">
  import { Message } from "tabler-icons-svelte";
</script>

<div class="chat-btn-wrapper">
  <div class="chat-btn-bg" />
  <div class="chat-btn"><Message size="28" />Chat</div>
</div>

<style>
  .chat-btn-wrapper {
    position: relative;
    width: 100%;
    height: 54px;
    cursor: pointer;
  }

  .chat-btn-bg {
    position: absolute;
    z-index: -1;
    top: 4px;
    left: 4px;
    width: 100%;
    height: 100%;
    background: black;
  }

  .chat-btn {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 10px;
    border: 3px solid black;
    background: #96c1f2;
    padding: 0 10px;
    font-size: 22px;
    font-weight: 500;
  }

  @media (max-width: 600px) {
    .chat-btn-wrapper {
      height: 48px;
    }

    .chat-btn {
      font-size: 20px;
    }
  }
</style>
