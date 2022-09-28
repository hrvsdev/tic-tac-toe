<script>
  import IUS from "../../assets/IUS.svelte";
</script>

<header>
  <div class="container">
    <div class="left">
      <a href="/" class="icon"><IUS /></a>
    </div>
    <div class="right">
      <a href="https://hrvs.me" target="_blank">Github</a>
    </div>
  </div>
</header>

<style>
  header {
    width: 100%;
    border-bottom: 1px solid rgb(239 239 239);
    padding: 15px 20px;
    margin-bottom: 50px;
  }

  .container {
    max-width: 830px;
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .left,
  .right {
    display: flex;
    align-items: center;
    column-gap: 20px;
  }

  .icon {
    display: flex;
    align-items: center;
  }
</style>
