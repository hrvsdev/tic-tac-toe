<script context="module" lang="ts">
	import CreateGameInfo from '$lib/into-game/create-game/CreateGameInfo.svelte';
	import Layout from '$lib/Layout.svelte';
</script>

<Layout>
	<svelte:fragment slot="content">
		<CreateGameInfo />
	</svelte:fragment>
</Layout>
