const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let films = ['Сваты', 'Пёс', 'Смешарики'];

function showMenu() {
    console.log('==============================')
    console.log('======Выбирите действие=======')
    console.log('======1. Добавить фильм=======')
    console.log('======2. Удалить фильм========')
    console.log('====3. Весь список фильмов====')
    console.log('====4. Выйти из программы=====')
    console.log('==============================')

    rl.question('> Ваш выбор: ', (choice) => {
        if (choice === '1') {
            rl.question('Какой фильм хотите добавить? ', (newFilm) => {
                films.push(newFilm);
                console.log(`Добавлен: "${newFilm}"`);
                showMenu();
            });
        }
        else if (choice === '2') {
            rl.question('Какой фильм хотите удалить? ', (filmToRemove) => {
                const index = films.findIndex(f => f.toLowerCase() === filmToRemove.toLowerCase());
                if (index !== -1) {
                    console.log(`Удалён: "${films.splice(index, 1)}"`);
                } else {
                    console.log('❌ Фильм не найден!');
                }
                showMenu();
            });
        }
        else if (choice === '3') {
            console.log('\nВаши фильмы:');
            films.forEach((film, i) => console.log(`${i + 1}. ${film}`));
            showMenu();
        }
        else if (choice === '4') {
            console.log('Программа завершена!');
            rl.close();
        }
        else {
            console.log('⚠️ Неверная команда!');
            showMenu();
        }
    });
}

showMenu();
