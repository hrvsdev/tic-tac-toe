<script lang="ts">
  import { get, ref } from "firebase/database";
  import queryString from "query-string";

  import { data, player, id } from "./Board.svelte";
  import { show } from "./Home.svelte";
  import { db, newGame, updateGame } from "../firebase/db";

  import type { IGame } from "../firebase/types";

  // Getting game id from URL
  const queryId = queryString.parse(window.location.search).g as string;

  // Create a new game function
  const createGame = () => {
    // Setting player to host and making it connected
    $data.host.isDisconnected = false;
    player.set("X");

    // Creating a new game and getting its uid
    const res = newGame($data);
    id.set(res.id), alert(res.id);

    // Showing the board
    show.set(true);
  };

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

<h1>Create a new game</h1>
<button on:click={createGame}>Create</button>
{#if queryId}
  <button on:click={openGame}>Join</button>
{/if}
