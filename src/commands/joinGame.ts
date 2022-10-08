import { get, ref } from 'firebase/database';

import { player, id } from '../stores/game-store';
import { db, updateGame } from '../firebase/db';
import type { IGame } from '../firebase/types';

// Join a game function
const joinGame = async (hashId: string) => {
	try {
		// Checking if there is id
		if (!hashId.trim()) return { success: false };

		// Setting id
		id.set(hashId);

		// Getting snapshot from db via id
		const snap = await get(ref(db, hashId));

		// Check if game exists
		if (snap.exists() === false) return { success: false, msg: 'not-found' };

		// Getting data from snap
		const data = snap.val() as IGame;

		// Checking if host is connected and friend is disconnceted
		if (data.host.isDisconnected) return { success: false, msg: 'host-dis' };
		if (!data.friend.isDisconnected) return { success: false, msg: 'already-conn' };

		//  Updating db with friend as online
		updateGame(hashId, { friend: { isDisconnected: false } });

		// Setting player
		player.set('O');

		return { success: true };
	} catch (error) {
		console.log(error);
		return { success: false };
	}
};

export default joinGame;
