// Компьютер загадывает число от 1 до 100
const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function guessNumber() {
    const userGuess = parseInt(prompt("Угадай число от 1 до 100:"));

    if (isNaN(userGuess)) {
        alert("Введи число!");
        guessNumber(); // Рекурсия, если ввели не число
        return;
    }

    attempts++;

    if (userGuess === secretNumber) {
        alert(`Поздравляю! Ты угадал за ${attempts} попыток.`);
    } else if (userGuess < secretNumber) {
        alert("Загаданное число больше.");
        guessNumber();
    } else {
        alert("Загаданное число меньше.");
        guessNumber();
    }
}

// Запуск игры
guessNumber();