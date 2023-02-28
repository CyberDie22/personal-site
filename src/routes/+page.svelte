<script lang="ts">
	import Toast from "$lib/components/Toast.svelte";
    import Card from "$lib/components/Card.svelte";

    let toast: Toast

</script>

<div class="flex justify-center items-center p-10">
    <Card>
        <h2 class="card-title">About Me</h2>
        <p>I program as a hobby, and play the clarinet in the CVHS Wind Ensemble and Symphony.</p>
    </Card>
</div>

<Toast bind:this={toast} />
