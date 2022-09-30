<section class="info-wrapper">
  <div class="info-bg" />
  <div class="info">
    <div class="round"><span>Round</span>8</div>
    <div class="status">Player X's move</div>
  </div>
</section>

<style>
  .info-bg {
    position: absolute;
    z-index: -1;
    top: 4px;
    left: 4px;
    width: 100%;
    height: 100%;
    background: black;
  }

  .info-wrapper {
    position: relative;
    max-width: 480px;
    width: 100%;
    height: 60px;
    margin-bottom: 50px;
    transition: all 300ms;
  }

  .info {
    display: flex;
    column-gap: 3px;
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
    font-size: 25px;
    font-weight: 700;
  }

  .round > span {
    margin-right: 5px;
  }

  .status {
    flex-grow: 1;
  } 
</style>
