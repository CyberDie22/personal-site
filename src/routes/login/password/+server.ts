export {}
// import type { RequestHandler } from '@sveltejs/kit';
// import { createClient } from 'redis'
// const {
//     createHash,
// } = await import('node:crypto');

// // FIXME: put password cryptography code into file not commited to VCS as to not expose any more information than is required!

// export const POST: RequestHandler = async ({request}) => {
//     const { email, password } = await request.json()

//     console.log(email)
//     console.log(password)

//     // TODO: actually check if this account is allowed
//     const client = createClient()
//     client.on('error', err => console.log('Redis Client Error:', err))

//     await client.connect()
//     const user = await client.get(`users:${email}`)
//     if (user == null) {
//         return new Response(JSON.stringify({ "success": "user-does-not-exist" }), { status: 404 })
//     }

//     client.set(`users:${email}:loggedin`, 0)

//     const user_password = await client.get(`users:${email}:password`)
//     const user_password_hashalgo = await client.get(`users:${email}:password:hashalgo`)
//     if (user_password == null || user_password_hashalgo == null) {
//         return new Response(JSON.stringify({ "success": "invalid-password" }), { status: 404 })
//     }

//     const password_hash = createHash(user_password_hashalgo).update(password).digest('hex')
//     console.log(password_hash)
//     if (password_hash !== user_password) {
//         return new Response(JSON.stringify({ "success": "wrong-password" }), { status: 404 })
//     }

//     await client.set(`users:${email}:loggedin`, 1)
//     await client.disconnect()

//     return new Response(JSON.stringify({ "success": "logged-in", "authtok": "PLACEHOLDER" }), { status: 200 })
// }