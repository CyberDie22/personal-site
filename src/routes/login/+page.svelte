<script lang="ts">
	import Toast from "$lib/components/Toast.svelte";
    import { user } from "$lib/auth/stores"

    let toast: Toast

    let email: string
    $: email, updateLoginSuccess('email')
    let password: string
    $: password, updateLoginSuccess('password')

    function updateLoginSuccess(type: string) {
        if (loginSuccess == 'wrong-password') {
            if (type == 'password') loginSuccess = ''
            else return
        }

        if (loginSuccess == 'user-does-not-exist') {
            if (type == 'email') loginSuccess = ''
            else return
        }
    }

    let loginSuccess = ""

    function login() { login1(); return undefined }

    async function login1() {
        const result = await fetch("/login/password", {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
               'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({ email, password })
        });
        const data = await result.json()

        loginSuccess = data["success"]
        if (loginSuccess == 'logged-in') {
            document.querySelector("#password-login-modal-close")?.click()
            setTimeout(() => {
                email = ""
                password = ""
            }, 500)
        }

        return undefined
    }
</script>

<input type="checkbox" id="password-login-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">
    <label id="password-login-modal-close" for="password-login-modal" class="btn btn-sm btn-circle btn-ghost bg-base-200 absolute right-2 top-2">✕</label>
    <h3 class="font-bold text-lg">Login with Password</h3>
    <div class="flex flex-row">
        <div>
            <form action="/login/password" method="post" target="_self">
                <input bind:value={email} type="email" name="email" placeholder="Email" class="input bg-base-200 focus:outline-none {loginSuccess == 'user-does-not-exist' ? 'border-red-400 focus:border-red-300' : 'focus:border-gray-300'} invalid:border-red-400 invalid:focus:border-red-300 w-full max-w-xs mt-4" />
                <input bind:value={password} type="password" name="password" placeholder="Password" class="input bg-base-200 focus:outline-none {loginSuccess == 'wrong-password' ? 'border-red-400 focus:border-red-300' : 'focus:border-gray-300'} w-full max-w-xs mt-4" />
            </form>
        </div>
        <div class="items-end modal-action">
            <button class="btn btn-ghost bg-base-200" on:click={() => login()} on:keypress={() => login()}>Login</button>
        </div>
    </div>
  </div>
</div>

<div class="flex justify-center items-center min-h-[calc(100vh-4rem)]">
    <div class="flex flex-col gap-4 artboard phone-3 p-4 bg-base-200">
        <label for="password-login-modal" class="btn">Login with Password</label>
        <button on:click={console.log(loginSuccess)}>test</button>
    </div>
</div>

<Toast bind:this={toast} />
