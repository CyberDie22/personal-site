<script lang="ts">
    export let message = ''
    export let alerttype = 'alert-info'

    export function callToast(msg: string, type?: string|undefined, ms?: number|undefined) {
        console.log('callToast()');
        let milliseconds: number = 8000;
        if(ms) { milliseconds = ms; }
        if(type) { alerttype = `alert-${type}`; }
        message = msg;

        setTimeout(() => {
            message = '';
        }, milliseconds);
    }
</script>

<div class="toast toast-bottom toast-end z-40">
    {#if message}
    <div class="alert {alerttype}">
        <div>
            <span>{message}</span>
        </div>
    </div>
    {/if}
</div>