<script module="context" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { showJoinGameInfo } from '$lib/into-game/into-game-store';

	export const load: Load = ({ params }) => {
		showJoinGameInfo.set(true);
	};

	import Home from '$lib/Layout.svelte';
</script>

<Home />
