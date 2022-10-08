<script lang="ts">
	import { page } from '$app/stores';
	import { id } from '../../../stores/game-store';
	import { Share } from 'tabler-icons-svelte';
	import { shareId } from '../../../utils';

	// Share action
	const share = () => shareId($id, $page.url.origin + '/' + $id);
</script>

<div class="share-wrapper" on:click={share}>
	<div class="share-bg" />
	<div class="share"><Share size="26" /> Share</div>
</div>

<style>
	.share-wrapper {
		position: relative;
		width: 100%;
		height: 54px;
		cursor: pointer;
	}

	.share-bg {
		position: absolute;
		z-index: -1;
		top: 4px;
		left: 4px;
		width: 100%;
		height: 100%;
		background: black;
	}

	.share {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		column-gap: 10px;
		border: 3px solid black;
		background: #d1b1f0;
		padding: 0 10px;
		font-size: 22px;
		font-weight: 500;
	}

	@media (max-width: 600px) {
		.share-wrapper {
			height: 48px;
		}

		.share {
			font-size: 20px;
		}
	}
</style>
