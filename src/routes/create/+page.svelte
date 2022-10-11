<script context="module" lang="ts">
	import Main from '$lib/Main.svelte';
	import Layout from '$lib/into-game/Layout.svelte';

	import AlreadyGame from '$lib/into-game/already-game/AlreadyGame.svelte';
	import CreateGameInfo from '$lib/into-game/create-game/CreateGame.svelte';
</script>

<Main>
	<Layout>
		<svelte:fragment slot="game">
			<AlreadyGame />
		</svelte:fragment>
		<svelte:fragment slot="content">
			<CreateGameInfo />
		</svelte:fragment>
	</Layout>
</Main>
