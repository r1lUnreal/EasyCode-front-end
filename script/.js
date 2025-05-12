const prompt = require('prompt-sync')();

const number1 = parseFloat(prompt('Введите первое число: '));
const number2 = parseFloat(prompt('Введите второе число: '));
const operation = prompt('Выберите действие ( * / + - ): ');

if (operation == '+') {
    console.log(number1 + number2);
}
else if (operation == '-') {
    console.log(number1 - number2);
}
else if (operation == '*') {
    console.log(number1 * number2);
}
else if (operation == '/') {
    console.log(number1 / number2);
}
else {
    console.log('Error in code');
}
