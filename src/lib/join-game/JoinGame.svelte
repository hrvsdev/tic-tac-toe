<script lang="ts">
  import queryString from "query-string";

  import CreateButton from "../buttons/CreateButton.svelte";
  import JoinButton from "../buttons/JoinButton.svelte";

  // Getting game id from URL
  const queryId = queryString.parse(window.location.search).g as string;
</script>

<h1>Create a new game</h1>
<CreateButton />
{#if queryId}
  <JoinButton {queryId} />
{/if}
