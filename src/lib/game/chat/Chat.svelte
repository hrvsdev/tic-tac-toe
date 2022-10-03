<script lang="ts">
    import { Message } from "tabler-icons-svelte";
  </script>
  
  <section class="chat-btn-wrapper">
    <div class="chat-btn-bg" />
    <div class="chat-btn"><Message size="28"/>Chat</div>
  </section>
  
  <style>
    .chat-btn-wrapper {
      position: relative;
      max-width: 430px;
      width: 100%;
      height: 54px;
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
      background: #fbdba7;
      padding: 0 10px;
      font-size: 22px;
      font-weight: 500;
    }
  
    @media (max-width: 600px) {
      .chat-btn-wrapper {
        max-width: 380px;
        height: 48px;
      }
  
      .chat-btn {
        font-size: 20px;
      }
    }
  </style>
  