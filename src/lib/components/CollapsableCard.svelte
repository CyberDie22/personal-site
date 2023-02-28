<script lang="ts">
    export let title: string;
    export let titleiconclass: string = "";
</script>

<div class="collapse card bg-base-300">
    <input type="checkbox" /> 
    <div class="collapse-title text-xl font-medium text-center p-4">
        {#if titleiconclass != ""} <i class={titleiconclass}></i> {/if} {title}
    </div>
    <div class="collapse-content">
        <slot />
    </div>
</div>