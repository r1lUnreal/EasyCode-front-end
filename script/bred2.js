const readline = require('readline');

// Оригинальный текст
const text = "Соберите 50 канализационных крышек и в подарок получите пи*ды. -ПИ*ДЫ ОТ РАБОТНИКОВ МосВодоканала ПАДЛЫ! - От работников МосВодоканала. ";

// Настройка размера консоли
const consoleWidth = process.stdout.columns || 80; // Ширина консоли (по умолчанию 80 символов)
const padding = ' '.repeat(consoleWidth); // Пробелы для плавного входа текста

let position = 0;

// Функция для обновления бегущей строки
function updateRunningText() {
    // Очищаем строку и перемещаем курсор в начало
    readline.cursorTo(process.stdout, 0, 0);
    readline.clearLine(process.stdout, 0);

    // Собираем текст с учетом текущей позиции
    const visibleText = (padding + text + padding).substr(
        position % (text.length + consoleWidth),
        consoleWidth
    );

    // Выводим текст
    process.stdout.write(visibleText);

    // Увеличиваем позицию для следующего кадра
    position++;

    // Задержка перед следующим обновлением (в мс)
    setTimeout(updateRunningText, 86);
}

// Запускаем бегущую строку
updateRunningText();

// Обработка завершения программы (Ctrl+C)
process.on('SIGINT', () => {
    readline.cursorTo(process.stdout, 0, 0);
    readline.clearLine(process.stdout, 0);
    process.exit();
});
