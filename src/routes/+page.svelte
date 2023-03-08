<script lang="ts">
	import Toast from "$lib/components/Toast.svelte";
    import Card from "$lib/components/Card.svelte";
    import LinkCard from "$lib/components/LinkCard.svelte";

    let toast: Toast

</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Home page for Ben Buzard's website">
</svelte:head>

<div class="flex flex-col justify-center items-center p-10">
    <Card>
        <h2 class="card-title">About Me</h2>
        <p>I program as a hobby, and play the clarinet in the CVHS Wind Ensemble and Symphony.</p>
    </Card>
    <div class="py-4"></div>
    <LinkCard href="/article/why-you-should-get-a-cat">
        <h2 class="card-title">Why You Should Get a Cat</h2>
        <p>Click to view</p>
    </LinkCard>
</div>

<Toast bind:this={toast} />
