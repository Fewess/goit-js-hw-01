const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
const input = prompt('Cколько дроидов вы хотите купить?');


if (input === null) {
    alert('Отменено пользователем!')
} else {
    const  num = Number(input);
    totalPrice = num * pricePerDroid;
    
    if (totalPrice > credits) {
        alert('Недостаточно средств на счету!.');
    } else {
    const rest = credits - totalPrice
    alert(`Вы купили ${num} дроидов, на счету осталось ${rest} кредитов.`)  
    }
}
