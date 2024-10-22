'use strict'

function getConvertedCurrencyString(sum, currencyFrom, currencyTo) {
    const allCurrenciesMultiplier =  { 'UAH': 1/41.43, 'USD': 1, 'EUR': 1.08 }

    const formats = {
        'USD': 'en-US',
        'UAH': 'uk-UA',
        'EUR': 'de-DE'
    };

    if (!allCurrenciesMultiplier[currencyFrom] || !allCurrenciesMultiplier[currencyTo]) {
        return null;
    }
    const multiplier = allCurrenciesMultiplier[currencyFrom] / allCurrenciesMultiplier[currencyTo];
    const formattedSum = new Intl.NumberFormat(formats[currencyTo], {
        style: 'currency',
        currency: currencyTo,
        useGrouping: false
    }).format(sum * multiplier);

    return formattedSum;
}
console.log(getConvertedCurrencyString(1000, 'USD', 'UAH'))
console.log(getConvertedCurrencyString(1000, 'UAH', 'USD'))
console.log(getConvertedCurrencyString(1000, 'USD', 'EUR'))
console.log(getConvertedCurrencyString(1000, 'UAH', 'EUR'))
console.log(getConvertedCurrencyString(1000, 'DAK', 'EUR'))
console.log(getConvertedCurrencyString(1000, 'EUR', 'UAH'))
