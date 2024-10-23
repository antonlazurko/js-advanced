'use strict'

const pizzaTimer = time => {
    console.log(`Timer started for ${time} minutes.`);
    const interval = setInterval(() => {
        // const minutest = new Date((time - 1) * 1000).getMinutes()
        // const secs = new Date((time - 1) * 1000).getSeconds()
        // console.log(`${minutest}:${secs}`);
        const end = new Date().getTime() + time * 1000 + 100
        const options = {
            minute: 'numeric',
            second: 'numeric'
        }
        console.log(new Intl.DateTimeFormat(navigator.language, options).format(end - new Date()))

        time--;
        if (time === 0) {
            clearInterval(interval);
        }

    }, 1000);
    setTimeout(() => {
    clearInterval(interval)
    console.log('Pizza is ready!')
    },time * 1000);
}
pizzaTimer(2000);