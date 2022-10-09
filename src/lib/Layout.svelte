<script lang="ts">
	import { id } from '../stores/game-store';

	import Header from './into-game/header/Header.svelte';
</script>

<Header />
<main>
	<slot name="game" />
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
