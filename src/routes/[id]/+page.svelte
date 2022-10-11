<script module="context" lang="ts">
	import Main from '$lib/Main.svelte';
	import Layout from '$lib/into-game/Layout.svelte';

	import JoinGame from '$lib/into-game/join-game/JoinGame.svelte';
</script>

<Main>
	<Layout>
		<svelte:fragment slot="content">
			<JoinGame />
		</svelte:fragment>
	</Layout>
</Main>
