<script lang="ts">
	import AlreadyGame from './into-game/already-game/AlreadyGame.svelte';
	import Header from './into-game/header/Header.svelte';
</script>

<main>
	<Header />
	<AlreadyGame />
	<section>
		<slot />
	</section>
</main>

<style>
	section {
		max-width: 870px;
		width: 100%;
		margin: auto;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(315px, 1fr));
		gap: 30px;
		padding: 0 20px;
	}

	@media (max-width: 500px) {
		section {
			grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
		}
	}
</style>
