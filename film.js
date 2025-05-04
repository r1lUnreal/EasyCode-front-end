console.log(' ')
console.log('------------------------------------');
console.log('Задание 1');
console.log('------------------------------------');
console.log(' ')

let film = 'Сваты';
let year = '28 декабря 2008 года';
let author = 'Юрий Морозов';
let director = 'Студия квартал 95';
let seasons = 7;

console.log('Фильм: ' + film);
console.log('Количество сезонов: ' + seasons);
console.log('Год выпуска: ' + year);
console.log('Владелец: ' + director);
console.log('Режиссёр: ' + author);

console.log(' ')
console.log('------------------------------------');
console.log('Задание 3');
console.log('------------------------------------');
console.log(' ')

const PI = 3.14159;
let radius = 10;
let squared = Math.pow(radius, 2);
let result = PI * squared;

let area = console.log("Площадь круга с радиусом " + radius + " " + "равна " + result);

console.log(' ')
console.log('------------------------------------');
console.log('Задание 2');
console.log('------------------------------------');
console.log(' ');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Введите длину прямоугольника: ', (length) => {
    readline.question('Введите ширину прямоугольника: ', (width) => {
        const area = parseFloat(length) * parseFloat(width);
        console.log(`Площадь прямоугольника: ${area}`);
        readline.close();
    });
});
