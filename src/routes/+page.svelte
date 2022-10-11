<script lang="ts">
	import Main from '$lib/Main.svelte';
	import Layout from '$lib/into-game/Layout.svelte';

	import AlreadyGame from '$lib/into-game/already-game/AlreadyGame.svelte';
	import CreateGame from '$lib/into-game/create-game/CreateGameButton.svelte';
	import JoinGame from '$lib/into-game/join-game/JoinGame.svelte';
</script>

<Main>
	<Layout>
		<svelte:fragment slot="game">
			<AlreadyGame />
		</svelte:fragment>
		<svelte:fragment slot="content">
			<CreateGame />
			<JoinGame />
		</svelte:fragment>
	</Layout>
</Main>
