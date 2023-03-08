<script lang="ts">
    let clazz: string = ""
    export { clazz as class }
</script>

<div class="card shadow-xl bg-base-300 mx-3 w-fit lg:min-w-[42rem] lg:max-w-2xl {clazz}">
    <div class="card-body">
        <slot />
    </div>
</div>