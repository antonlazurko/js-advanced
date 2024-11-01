'use strict'

const getApiUrl = (latitude, longitude) => `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`;

async function getCoordinates() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                resolve({latitude, longitude});
            },
            (error) => {
                reject(error);
            })
    })
}

async function getMyCity() {
    try {
        const { latitude, longitude } = await getCoordinates();

        const response = await fetch(getApiUrl(latitude, longitude));

        if (response.status !== 200) {
            throw new Error('Products Error: ', productsResponse.status);
        }
        const { city } = await response.json();
        console.log(city);

    } catch (error) {
        console.error(error);
    } finally {
        console.log('finally');
    }
}

getMyCity()