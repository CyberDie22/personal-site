<script lang="ts">

	import Toast from "$lib/components/Toast.svelte";

    let toast: Toast

</script>

home

<Toast bind:this={toast} />
