<script lang="ts">
	import AlreadyGame from '$lib/into-game/already-game/AlreadyGame.svelte';
	import CreateGame from '$lib/into-game/create-game/CreateGame.svelte';
	import JoinGame from '$lib/into-game/join-game/JoinGame.svelte';

	import Layout from '$lib/Layout.svelte';
</script>

<Layout>
	<svelte:fragment slot="game">
		<AlreadyGame />
	</svelte:fragment>
	<svelte:fragment slot="content">
		<CreateGame />
		<JoinGame />
	</svelte:fragment>
</Layout>
