<script lang="ts">
    export let href: string;
    let clazz: string = "";
    export { clazz as class }
</script>
<a href={href} class="card shadow-xl bg-base-300 border border-base-300 hover:bg-opacity-90 hover:border-white hover:border-opacity-50 hover:border px-2 w-fit md:min-w-[42rem] md:max-w-2xl {clazz}">
    <div class="card-body">
        <slot />
    </div>
</a>