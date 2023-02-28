<script lang="ts">
    import CollapsableCard from "$lib/components/CollapsableCard.svelte";
	import IconLink from "$lib/components/IconLink.svelte";
    import Link from "$lib/components/Link.svelte";
</script>

<div class="flex justify-center items-center p-10">
    <div class="grid gap-4 grid-rows-4 grid-cols-6">
        <IconLink href="https://typescriptlang.org" icon="typescript"></IconLink>
        <IconLink href="https://tailwindcss.com" icon="tailwindcss"></IconLink>
        <IconLink href="https://svelte.dev" icon="svelte"></IconLink>
        <IconLink href="https://kotlinlang.org" icon="kotlin"></IconLink>
        <IconLink href="https://rust-lang.org" icon="rust"></IconLink>
        <IconLink href="https://apple.com" icon="apple"></IconLink>
    </div>
</div>