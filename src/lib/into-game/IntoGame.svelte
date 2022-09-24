<script lang="ts">
  import CreateButton from "../buttons/CreateButton.svelte";
  import JoinButton from "../buttons/JoinButton.svelte";
  import JoinGame from "./JoinGame.svelte";

  import { getQueryId } from "../utils";

  const queryId = getQueryId();
</script>

<JoinGame/>
