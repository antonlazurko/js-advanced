'use strict'
const options = {
    style: 'currency',
    currency: 'UAH',
    minimumFractionDigits: 2,
    // useGrouping: false
}
const usOptions = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 1
}


console.log(new Intl.NumberFormat('ua-UA', options).format(1234.56));// 12 345,56 грн
console.log(new Intl.NumberFormat('us-US', usOptions).format(100022200));   //$100,022,200.00
console.log(new Intl.NumberFormat('us-US', {style: 'decimal'}).format(100022200));  //100,022,200
console.log(new Intl.NumberFormat('us-US', {style: 'percent'}).format(0.56));   //56%
console.log(new Intl.NumberFormat('us-US', {style: 'unit', unit: 'celsius'}).format(100));//100 °C
