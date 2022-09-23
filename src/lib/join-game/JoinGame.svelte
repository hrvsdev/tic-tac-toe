<script lang="ts">
  import CreateButton from "../buttons/CreateButton.svelte";
  import JoinButton from "../buttons/JoinButton.svelte";
  
</script>

<h1>Create a new game</h1>
<CreateButton/>
{#if queryId}
  <JoinButton on:click={openGame} />
{/if}
