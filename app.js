'use strict'
const user = {
    birthday: '05/05/1987'
}

function isBirthdayToday(birthday) {
    const today = new Date();
    const birthdayMonth = new Date(birthday).getMonth();
    const birthdayDay = new Date(birthday).getDate();

    console.log(today.getMonth(),  birthdayMonth);
    console.log(today.getDate(),  birthdayDay);

    return today.getMonth() === birthdayMonth && today.getDate() === birthdayDay;
}

console.log(isBirthdayToday(user.birthday))
console.log(isBirthdayToday('10/22/2024'));
