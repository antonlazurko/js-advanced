'use strict';

import { add, sub, res } from './calc.js';

console.log('test app');

console.log(sub(7, 0));

const interval = setInterval(() => {
    console.log(add(1, 3));
    setTimeout(() => {
        clearInterval(interval)
    }, 5000);
}, 1000)



console.log(res);
