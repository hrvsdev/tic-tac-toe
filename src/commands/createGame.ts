import { get } from 'svelte/store';
import { data, player, id } from '../stores/game-store';
import { newGame } from '../firebase/db';

// Create a new game function
const createGame = () => {
	// Making host connected
	data.update((d) => {
		d.host.isDisconnected = false;
		return d;
	});

	// Setting player to host
	player.set('X');

	// Creating a new game and getting its uid
	const res = newGame(get(data));
	if (res.success && res.id) id.set(res.id);
};

export default createGame;
