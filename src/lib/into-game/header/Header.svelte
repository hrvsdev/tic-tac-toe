<script>
  import { BrandGithub } from "tabler-icons-svelte";
  import IUS from "../../assets/IUS.svelte";
</script>

<header>
  <div class="container">
    <div class="left">
      <a href="/" class="icon"><IUS /></a>
    </div>
    <div class="right">
      <a href="https://hrvs.me" target="_blank">
        <BrandGithub size="32" />
      </a>
    </div>
  </div>
</header>

<style>
  header {
    width: 100%;
    border-bottom: 1px solid rgb(239 239 239);
    padding: 15px 20px;
    margin-bottom: 30px;
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
    justify-content: center;
    column-gap: 20px;
  }

  .icon {
    display: flex;
    align-items: center;
  }

  .right a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(0 0 0/0.8);
    transition: all 300ms;
  }

  .right a:hover{
    color: black;
  }
</style>
