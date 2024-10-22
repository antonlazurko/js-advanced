'use strict'

const date1 = new Date(2024, 10, 15)
const sameDateTheDate1 = new Date(2024, 10, 15)
const date2 = new Date(2024, 11, 15)

console.log(date1 > date2);
console.log(date1 === sameDateTheDate1);//false
console.log(date1.getTime() === sameDateTheDate1.getTime());
