<script>
	import AnchorButton from '$lib/components/AnchorButton.svelte';
    import '../app.postcss';
    import { onMount } from 'svelte'
    import { pwaInfo } from 'virtual:pwa-info'
    
    onMount(async () => {
        if (pwaInfo) {
        const { registerSW } = await import('virtual:pwa-register')
        registerSW({
            immediate: true,
            onRegistered(r) {
            // uncomment following code if you want check for updates
            // r && setInterval(() => {
            //    console.log('Checking for sw update')
            //    r.update()
            // }, 20000 /* 20s for testing purposes */)
            console.log(`SW Registered: ${r}`)
            },
            onRegisterError(error) {
            console.log('SW registration error', error)
            }
        })
        }
    })
    let ReloadPrompt
    onMount(async () => {
        pwaInfo && (ReloadPrompt = (await import('$lib/components/ReloadPrompt.svelte')).default)
    })
    
    $: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : ''

    let hideNavbar = false
    let showFooter = false
    onMount(() => {
        console.log(window.location.pathname)
        showFooter = window.location.pathname === "/article/why-you-should-get-a-cat"
        let queryString = window.location.search
        let urlParams = new URLSearchParams(queryString)
        hideNavbar = urlParams.has('hideNavbar')
    })
</script>

<svelte:head>
    {@html webManifest}
</svelte:head>

{#if !hideNavbar}
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
{/if}

<slot />

{#if showFooter}
<div class="footer bg-base-200 p-2">
    <a href="https://github.com/CyberDie22/personal-site/blob/main/src/routes/article/why-you-should-get-a-cat/%2Bpage.svelte" target="_blank" rel="noreferrer" class="hover:text-white">View Code</a>
</div>
{/if}
