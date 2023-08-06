<script lang='ts'>
	import { onDisconnect, onValue, ref } from 'firebase/database';
	import { db } from '../firebase/db';
	import { data, id, player } from '../stores/game-store';

	import type { IGame } from '../firebase/types';

	// Getting realtime data by firebase snapshot
	if ($id) {
		onValue(ref(db, $id), (res) => {
			if (res.exists()) {
				$data = res.val() as IGame;
			} else {
				$data.host.isDisconnected = true;
			}
		});
	}

	// Removing if host disconnects
	if ($player === 'X' && $id) onDisconnect(ref(db, $id)).remove();

	// Setting disconnection to true if friend disconnects
	if ($player === 'O' && $id) onDisconnect(ref(db, $id)).update({ 'friend/isDisconnected': true });
</script>

<slot />
