<script lang="ts">
  import CreateButton from "../buttons/CreateButton.svelte";
  import JoinButton from "../buttons/JoinButton.svelte";

  import { getQueryId } from "../utils";

  const queryId = getQueryId();
</script>

<h1>Create a new game</h1>
<CreateButton />
{#if queryId}
  <JoinButton/>
{/if}
