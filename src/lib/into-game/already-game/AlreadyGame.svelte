<script lang="ts">
	import { goto } from '$app/navigation';

	// Button click action
	const onClick = () => goto('/game');
</script>

<div class="card-wrapper" on:click={onClick}>
	<p>Open already running game: <span>672927</span></p>
</div>

<style>
	.card-wrapper {
		max-width: 830px;
		width: 100%;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #e1efff;
		outline: 2px solid #0072f5;
		box-shadow: #5ea2ef 0px 4px 14px 0px;
		border-radius: 15px;
		cursor: pointer;
		margin-bottom: 30px;
		transition: all 100ms;
	}

	.card-wrapper:active {
		translate: 0 1px;
	}

	p {
		font-size: 19px;
		font-weight: 400;
		color: rgba(0, 0, 0, 0.9);
	}

	p > span {
		font-weight: 500;
		color: rgb(0, 0, 0);
	}

	@media (max-width: 600px) {
		p {
			font-size: 17px;
		}
	}
</style>
