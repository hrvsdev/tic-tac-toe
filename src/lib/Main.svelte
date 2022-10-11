<script>
	import { id } from '../stores/game-store';

	$: {
		console.log($id);
	}
</script>

<slot />
