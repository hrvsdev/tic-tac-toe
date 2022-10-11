<script lang="ts">
	import Main from '$lib/Main.svelte';
	import Layout from '$lib/into-game/Layout.svelte';

	import CreateGameButton from '$lib/into-game/create-game/CreateGameButton.svelte';
	import JoinGameButton from '$lib/into-game/join-game/JoinGameButton.svelte';
</script>

<Main>
	<Layout>
		<svelte:fragment slot="content">
			<CreateGameButton />
			<JoinGameButton />
		</svelte:fragment>
	</Layout>
</Main>
