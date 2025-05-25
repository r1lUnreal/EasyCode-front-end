async function printSongWithBlinkingEyes() {
    const lines = [
        "Соберите 50 канализационных крышек",
        "и получите пизды от работников МосВодоканала.",
        " "
    ];

    // Выводим строки песни
    lines.forEach(line => console.log(line));

    // Ждём 2 секунды перед морганием
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Моргающие глаза (бесконечный цикл)
    const eyes = ["=)", ":)"]; // Два варианта глаз
    let currentEye = 0;

    while (true) {
        // Перемещаем курсор на начало последней строки и очищаем её
        process.stdout.write('\x1B[1A\x1B[K'); // Переместить курсор вверх и очистить строку
        console.log(eyes[currentEye]); // Выводим текущие глаза

        currentEye = (currentEye + 1) % eyes.length; // Переключаем между 0 и 1
        await new Promise(resolve => setTimeout(resolve, 500)); // Задержка 0.5 сек
    }
}

// Запускаем
printSongWithBlinkingEyes().catch(console.error);
