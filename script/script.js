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

if (vop) {
    const CatOrDog = prompt("Какое животное вы хотите купить: кошка или собака?");

    if (CatOrDog && CatOrDog.toLowerCase() === "кошка") {
        alert("Проверяем наличие кошек... Есть 5 прекрасных кошек доступных для покупки!");
    } 
    else if (CatOrDog && CatOrDog.toLowerCase() === "собака") {
        alert("Проверяем наличие собак... Есть 3 замечательные собаки доступных для покупки!");
    } 
    else {
        alert("Вы выбрали неверный вариант или отменили выбор.");
    }
} 
else {
    alert("Спасибо, приходите еще!");
}
