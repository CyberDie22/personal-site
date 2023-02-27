<script>
	import '../app.postcss';
</script>

<div class="navbar bg-base-200">
    <div class="flex-1 lg:flex-none">
        <a href="/" class="btn btn-ghost normal-case text-xl">Personal Site</a>
    </div>
    <div class="flex justify-end flex-1">
        <div class="flex items-stretch">
            <div class="dropdown dropdown-end">
                <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label tabindex="0" class="btn btn-ghost rounded-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
                <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                <!-- <ul tabindex="0" class="menu dropdown-content p-2 shadow bg-base-200 rounded-box w-52 mt-4">
                    <li><a href="/login" class="btn btn-ghost bg-base-200">Sign In</a></li>
                </ul> -->
            </div>
        </div>
    </div>
</div>

<slot />
