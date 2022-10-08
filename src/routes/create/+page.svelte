<script context="module" lang="ts">
	import { get } from 'svelte/store';
	import { id } from '../../stores/game-store';

	import CreateGameInfo from '$lib/into-game/create-game/CreateGameInfo.svelte';
	import Layout from '$lib/Layout.svelte';

	import type { Load } from '@sveltejs/kit';

	export const load: Load = () => {
		return { status: 302, redirect: '/hello' };
		// if (get(id)) {
		// 	return;
		// } else {
		// 	return {
		// 	};
		// }
	};
</script>

<Layout>
	<CreateGameInfo />
</Layout>
