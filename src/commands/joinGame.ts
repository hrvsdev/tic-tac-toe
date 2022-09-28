import { get, ref } from "firebase/database";

import { player, id } from "../lib/game/game-store";
import { db, updateGame } from "../firebase/db";
import { getURLId } from "../lib/utils";

import type { IGame } from "../firebase/types";

// Query id from URL
const queryId = getURLId();

// Join a game function
const joinGame = async () => {
  // Setting id
  id.set(queryId);

  // Getting snapshot from db via id
  const snap = await get(ref(db, queryId));

  // Check if game exists
  if (snap.exists() === false) return { success: false, msg: "not-found" };

  // Getting data from snap
  const data = snap.val() as IGame;

  // Checking if host is connected and friend is disconnceted
  if (data.host.isDisconnected) return { success: false, msg: "host-dis" };
  if (!data.friend.isDisconnected) return { success: false, msg: "already-conn" };
  //  Updating db with friend as online
  updateGame(queryId, { friend: { isDisconnected: false, sign: "O" } });

  // Setting player
  player.set("O");

  return { success: true };
};

export default joinGame;
