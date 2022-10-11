<script context="module" lang="ts">
	import Layout from '$lib/into-game/Layout.svelte';
	import JoinGameInfo from '$lib/into-game/join-game/JoinGameInfo.svelte';
	import AlreadyGame from '$lib/into-game/already-game/AlreadyGame.svelte';
</script>

<Layout>
	<svelte:fragment slot="game">
		<AlreadyGame />
	</svelte:fragment>
	<svelte:fragment slot="content">
		<JoinGameInfo />
	</svelte:fragment>
</Layout>
