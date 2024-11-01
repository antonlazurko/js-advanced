'use strict'

async function main() {
    const response = fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: 'emilys',
            password: 'emilyspass',
        }),
    })
    const data = await response.json()
    console.log(data)
}
main()