import { writable, derived, get } from 'svelte/store';

import type { IGame } from '../firebase/types';
import type { Turn } from '$lib/types';

// Game data used for sharing between players via db
export const data = writable<IGame>({
	// Current turn
	turn: 'X',

	// Moves of the board
	moves: Array(9).fill({ value: '', state: '' }),

	// Current scores of players
	scoreX: 0,
	scoreO: 0,

	// Current round
	round: 1,

	// Host and friend value
	host: { isDisconnected: true },
	friend: { isDisconnected: true },

	// Current game win and draw state
	isWin: false,
	isDraw: false
});

// Generated id of the current game
export const id = writable('');

// Id for current ongoing game
export const gameId = writable('');

// Player status state
export const player = writable<Turn>('X');

// Status of the game
export const status = derived(data, (d) => {
	// If any of player is disconnected
	if (d.host.isDisconnected) return 'Game is deleted!';
	if (d.friend.isDisconnected) return 'Friend (O) disconnected!';

	// If game is drawn to tied
	if (d.isDraw) return 'Tie! Click to play';

	// If there is a win
	if (d.isWin) {
		return get(player) === d.winner ? `You (${d.winner}) won!` : `${d.winner} won!`;
	}

	// Turn status
	return get(player) === d.turn ? `Your (${d.turn}) turn!` : `${d.turn}'s turn!`;
});
