const operation = prompt('Сколько снять с баланса?');
const balance = prompt('Какой у вас баланс?');

function bankOperation(a, b) {
    if (a > b) {
        alert('Недостаточно средств.');
    }
    else if (a <= 0) {
        alert('Некорректная сумма.');
    }
    else {
        const newBalance = b - a;
        alert('Теперь ваш баланс: ' + newBalance);
    }
}

bankOperation(operation, balance);
