console.log(' ');
console.log('-----------------');
console.log('Задание 1');
console.log('-----------------');
console.log(' ');

let age = parseInt(prompt('Сколько вас лет?'));

if (age >= 18) {
    alert('Вы можете совершать покупки в нашем зоомагазине');
}
else {
    alert('Извините, покупки доступны только с 18 лет');
}

console.log(' ');
console.log('-----------------');
console.log('Задание 2');
console.log('-----------------');
console.log(' ');

let club = prompt('Вы являетесь членом нашего клуба?');

if (club == 'да') {
    let sale = parseInt(prompt('На сколько рублей ваша покупка?'));

    if (sale >= 1000) {
        alert('Ваша скидка 20%');
    }
    else {
        alert('Для получения скидки сумма ваше покупки должна быть от 1000 рублей');
    }
}
else if (club == 'нет') {
    let sale1 = parseInt(prompt('На сколько рублей ваша покупка?'));

    if (sale1 >= 5000) {
        alert('Вышв скидка 10%');
    }
    else {
        alert('Для получения скидки ваша сумма покупки должна быть от 5000 рублей');
    }
}
else {
    console.log('Error');
}

console.log(' ');
console.log('-----------------');
console.log('Задание 3');
console.log('-----------------');
console.log(' ');

const vop = confirm("Хотите купить животное?");
const cat_availability = false;
const dog_availability = true;

if (vop) {
    const pet = prompt('Кошку или собаку?')

    if (pet == 'кошка' || pet == 'Кошка' || pet == 'cat' || pet == 'Cat' || pet == 'кошку' || pet == 'Кошку') {
        if (cat_availability == true) {
            alert('У нас есть: муся, бося, барсик')
        }
        else {
            alert('Котики усё')
        }
    }
    else if (pet == 'собака' || pet == 'Собака' || pet == 'dog' || pet == 'Dog' || pet == 'собаку' || pet == 'Собаку') {
        if (dog_availability == true) {
            alert('У нас есть: шарик, бобик')
        }
        else {
            alert('Собачки усё')
        }
    }
    else {
        alert('У нас такого животного нету =(')
    }
}
else {
    alert('Хорошо. У нас ещё есть игрушки и корма для вашего питомца.')
}
