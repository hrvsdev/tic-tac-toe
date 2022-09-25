<script>
    import { copy } from "../../utils";
  
    const copyId = () => copy("text");
  </script>
  
  <div class="card-wrapper">
    <h3>Copy your Game ID</h3>
    <div class="card-body">
      <p>
        Give this ID to someone to connect to this game. The game will be deleted if you
        leave this page or close the app.
      </p>
      <div class="id-wrapper" on:click={copyId}>https://t3.hrvs.me/#572937</div>
    </div>
  </div>
  
  <style>
    .card-wrapper {
      outline: 2px solid #17c964;
      background-color: #f1fdf7;
      box-shadow: rgb(136, 241, 182) 0px 4px 14px 0px;
      border-radius: 15px;
      overflow: hidden;
      max-width: 400px;
    }
  
    h3 {
      padding: 12px 20px;
      font-size: 19px;
      font-weight: 500;
      border-bottom: 2px solid #17c964;
    }
  
    .card-body {
      padding: 25px 20px;
      font-size: 17px;
      color: rgba(0 0 0/0.8);
    }
  
    p {
      margin-bottom: 20px;
    }
  
    .id-wrapper {
      cursor: pointer;
      color: black;
      letter-spacing: 0.5px;
      border-radius: 10px;
      padding: 10px 15px;
      background: #adf5cc;
      text-align: center;
      transition: background 300ms, transform 150ms;
    }
  
    .id-wrapper:hover {
      background: #88f1b6;
    }
  
    .id-wrapper:active {
      transform: translateY(2px);
    }
  </style>
  