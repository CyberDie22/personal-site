<script lang="ts">
    export let href: string;
</script>

<a href={href} target="_blank" rel="noreferrer" class="underline decoration-white/30 hover:decoration-white/60">
    <slot />
</a>