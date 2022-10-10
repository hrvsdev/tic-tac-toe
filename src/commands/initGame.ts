import { get } from 'svelte/store';
import { ref, remove } from 'firebase/database';
import { db } from '../firebase/db';
import { data, id } from '../stores/game-store';

const initGame = () => {
	if (get(id)) {
		remove(ref(db, get(id)));
		id.set('');
		data.set({
			turn: 'X',
			moves: Array(9).fill({ value: '', state: '' }),
			scoreX: 0,
			scoreO: 0,
			round: 1,
			host: { isDisconnected: true },
			friend: { isDisconnected: true },
			isWin: false,
			isDraw: false
		});
	} else return;
};

export default initGame;
