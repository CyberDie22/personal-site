<script>
	import AnchorButton from '$lib/components/AnchorButton.svelte';
import '../app.postcss';
</script>

<div class="navbar bg-base-200">
<div class="navbar bg-base-200">
    <div class="flex-1 lg:flex-none">
        <AnchorButton href="/">Ben Buzard</AnchorButton>
        <div class="w-8"></div>
        <AnchorButton href="/skills">Skills</AnchorButton>
    </div>
    <div class="flex justify-end flex-1">
        <div class="flex items-stretch">
            <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost rounded-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </div>
        </div>
    </div>
</div>

<slot />
