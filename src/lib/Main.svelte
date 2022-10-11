<script>
	import { id } from '../stores/game-store';

	id.subscribe((v) => console.log(v));
</script>

<slot />
