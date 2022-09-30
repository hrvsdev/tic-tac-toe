<div class="info-wrapper">
  <div class="info-bg" />
  <div class="info">
    <div class="round"><span>Round</span>8</div>
    <div class="status">Player X's move</div>
  </div>
</div>

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
  }

  .round {
    font-weight: 700;
    font-size: 40px;
  }

  .round > span {
    font-size: 20px;
    font-weight: 400;
    margin-right: 5px;
  }

  .status {
    flex-grow: 1;
    font-size: 30px;
    font-weight: 700;
  }
</style>
