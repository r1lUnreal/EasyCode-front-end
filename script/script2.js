let phone = ['Сваты', 'Пёс', 'Смешарики'];

function menushka() {
    const menu = prompt(
        'Выбирите действие\n' +
        '1. Добавить контак\n' +
        '2. Удалить контак\n' +
        '3. Весь список контактов\n' +
        '4. Выйти из телефонной книги\n'
    );

    if (menu == '1') {
        let pam = prompt('Введите имя контакта который хотите добавить');
        let PhoneNumber = prompt('Введите номер контакта который хотите добавить');
        if (pam) phone.push(pam);
        if (PhoneNumber) phone.push(PhoneNumber);
        menushka();
    }
    else if (menu === '2') {
        let filmToRemove = prompt('Какой контакт вы хотите удалить?');
        if (filmToRemove) {
            const index = films.findIndex(film =>
                film.toLowerCase() === filmToRemove.toLowerCase()
            );

            if (index != -1) {
                const deletedFilm = films.splice(index, 1)[0];
                alert(`Контак "${deletedFilm}" успешно удален!`);
            } else {
                alert(`Контакт "${filmToRemove}" не найден!`);
            }
        }
        menushka();
    }
    else if (menu == '3') {
        alert(`Ваши контакты: ${phone}`);
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
