<script lang="ts">
    export let clazz: string = "";
</script>

<div class="card shadow-xl bg-base-300 w-fit {clazz}">
    <div class="card-body">
        <slot />
    </div>
</div>