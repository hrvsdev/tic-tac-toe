<script lang="ts">
  import { get, ref } from "firebase/database";

  import { player, id } from "../game/Board.svelte";
  import { show } from "../Home.svelte";
  import { db, updateGame } from "../../firebase/db";

  import type { IGame } from "../../firebase/types";

  export let queryId: string;

  // Join a game function
  const openGame = async () => {
    // Setting id
    id.set(queryId);

    // Getting snapshot from db via id
    const snap = await get(ref(db, queryId));

    // Check if game exists
    if (snap.exists() === false) return alert("Game doesn't exists");

    // Getting data from snap
    const data = snap.val() as IGame;

    // Checking if host is connected and friend is disconnceted
    if (data.host.isDisconnected) return alert("Host is disconnected");
    if (!data.friend.isDisconnected) return alert("There are already connections");

    //  Updating db with friend as online
    updateGame(queryId, { friend: { isDisconnected: false, sign: "O" } });

    // Setting player
    player.set("O");

    // Showing the board
    show.set(true);
  };
</script>

<button on:click={openGame}>Join game</button>
