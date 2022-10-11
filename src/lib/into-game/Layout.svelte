<script lang="ts">
	import { gameId, id } from '../../stores/game-store';

	import Header from './header/Header.svelte';
</script>

<Header />
<main>
	{#if $gameId && $id === $gameId}
		<slot name="game" />
	{/if}
	<section>
		<slot name="content" />
	</section>
</main>

<style>
	main {
		width: 100vw;
		padding: 0 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	section {
		max-width: 830px;
		width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(315px, 1fr));
		gap: 30px;
	}

	@media (max-width: 500px) {
		section {
			grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
		}
	}
</style>
