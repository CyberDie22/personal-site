<script lang="ts">
    export let title: string;
</script>

<h2 class="text-2xl font-bold">{title}</h2>
<div class="flex justify-start items-start">
    <slot />
</div>