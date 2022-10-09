<script lang="ts">
	import { onDisconnect, onValue, ref } from 'firebase/database';
	import { db } from '../firebase/db';
	import { player, id, data } from '../stores/game-store';

	import Header from './into-game/header/Header.svelte';

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

<main>
	<Header />
	<section>
		<slot />
	</section>
</main>

<style>
	section {
		max-width: 870px;
		width: 100%;
		margin: auto;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(315px, 1fr));
		gap: 30px;
		padding: 0 20px;
	}

	@media (max-width: 500px) {
		section {
			grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
		}
	}
</style>
