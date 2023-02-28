<script lang="ts">
    export let icon: string;
    export let href: string;
</script>

<a href={href} target="_blank" rel="noreferrer" class="bg-base-300 border border-base-300 hover:bg-opacity-90 hover:border-white hover:border-opacity-50 hover:border p-4 rounded-lg"><i class="devicon-{icon}-plain colored text-5xl"></i></a>