<script lang="ts">
    export let href: string;
</script>
<a href={href} class="card shadow-xl bg-base-300 w-fit border border-base-300 hover:bg-opacity-90 hover:border-white hover:border-opacity-50 hover:border">
    <div class="card-body">
        <slot />
    </div>
</a>