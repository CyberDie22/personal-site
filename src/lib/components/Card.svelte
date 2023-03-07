<script lang="ts">
    let clazz: string = ""
    export { clazz as class }
</script>

<div class="card shadow-xl bg-base-300 min-w-[42rem] max-w-2xl {clazz}">
    <div class="card-body">
        <slot />
    </div>
</div>