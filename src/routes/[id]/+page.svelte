<script module="context" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = ({ params }) => {
	};

	import Home from '$lib/Layout.svelte';
</script>

<Home />
