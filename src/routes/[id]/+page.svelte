<script module="context" lang="ts">
	import Main from '$lib/Main.svelte';
	import Layout from '$lib/into-game/Layout.svelte';

	import AlreadyGame from '$lib/into-game/already-game/AlreadyGame.svelte';
	import JoinGameInfo from '$lib/into-game/join-game/JoinGameInfo.svelte';
</script>

<Main>
	<Layout>
		<svelte:fragment slot="game">
			<AlreadyGame />
		</svelte:fragment>
		<svelte:fragment slot="content">
			<JoinGameInfo />
		</svelte:fragment>
	</Layout>
</Main>
