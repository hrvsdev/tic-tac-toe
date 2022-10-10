<script context="module" lang="ts">
	import AlreadyGame from '$lib/into-game/already-game/AlreadyGame.svelte';
	import CreateGameInfo from '$lib/into-game/create-game/CreateGameInfo.svelte';
	import Layout from '$lib/Layout.svelte';
</script>

<Layout>
	<svelte:fragment slot="game">
		<AlreadyGame />
	</svelte:fragment>
	<svelte:fragment slot="content">
		<CreateGameInfo />
	</svelte:fragment>
</Layout>
