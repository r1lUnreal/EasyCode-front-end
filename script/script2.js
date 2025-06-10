let films = ['Сваты', 'Пёс', 'Смешарики'];

function menushka() {
    const menu = prompt('Выбирите дейтсвие: 1. Добавить фильм 2. Удалить фильм 3. Посмотреть весь список фильмов 4. выйти из программы');

    if (menu == '1') {
        let pam = prompt('Введите название фильма для его добавления');
        if (pam) films.push(pam);
        menushka();
    }
    else if (menu === '2') {
        let filmToRemove = prompt('Какой фильм хотите удалить?');
        if (filmToRemove) {
            const index = films.findIndex(film =>
                film.toLowerCase() === filmToRemove.toLowerCase()
            );

            if (index != -1) {
                const deletedFilm = films.splice(index, 1)[0];
                alert(`Фильм "${deletedFilm}" успешно удален!`);
            } else {
                alert(`Фильм "${filmToRemove}" не найден!`);
            }
        }
        menushka();
    }
    else if (menu == '3') {
        alert(`Ваши фильмы: ${films}`);
        menushka();
    }
    else if (menu == '4') {
        if (confirm('Выйти из программы сейчас?')) {
            return;
        } else {
            menushka();
        }
    }
    else {
        alert('Неверная команда!');
        menushka();
    }
}

menushka();
