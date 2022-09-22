<script lang="ts">
  import { data, player, id } from "./Board.svelte";
  import { db, newGame, updateGame } from "../firebase/db";
  import { show } from "./Home.svelte";
  import { get, ref } from "firebase/database";

  import type { IGame } from "../firebase/types";

  const createGame = () => {
    $data.host.isDisconnected = false;
    $player = "X";

    const res = newGame($data);
    id.set(res.id);
    console.log(res.id);
    show.set(true);
  };

  const openGame = async () => {
    const path = window.location.pathname.substring(1);
    id.set(path);

    const snap = await get(ref(db, path));
    const data = snap.val() as IGame;

    if (data.host.isDisconnected) return;
    if (!data.friend.isDisconnected) return;

    updateGame(path, { friend: { isDisconnected: false } });
    $player = "O";
    show.set(true);
  };
</script>

<h1>Create a new game</h1>

<button on:click={createGame}>Create</button>

{#if window.location.pathname.substring(1)}
  <button on:click={openGame}>Join</button>
{/if}
