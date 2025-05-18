const balance = -10;

function checkBalance(a) {
    if (a > 0) {
        console.log('Ваш баласн положительный');
        return;
    }
    else if (a < 0) {
        console.log('Ваш балансе отрицательный');
        return;
    }
    else if (a == 0) {
        console.log('Ваш баланс равен нулю');
        return;
    }
    else {
        console.log('Error');
        return;
    }
}

checkBalance(balance);
