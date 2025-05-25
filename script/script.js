console.log(' ');
console.log('---------------------------------------');
console.log('================ work 1 ===============');
console.log('---------------------------------------');
console.log(' ');

function work(age) {
    for (let i = 1; i <= age; i++) {
        console.log(`Сотрудник работал ${i} лет`);
        if (i <= 5000) {
            console.log(`Бону сотрудника за роботу: ${i}000$`);
        }
    }
}

work(7);

console.log(' ');
console.log('---------------------------------------');
console.log('================ work 2 ===============');
console.log('---------------------------------------');
console.log(' ');

function bonus(age) {
    for (let i = 1; i <= age; i++) {
        let bal = 1000;

        if (i > 3) {
            bal += 500 * (i - 3);
        }

        let year;
        if (i == 1) {
            year = "год";
        } 
        else if (i >= 2 && i <= 4) {
            year = "года";
        } 
        else {
            year = "лет";
        }

        console.log(`Сотрудник работал ${i} ${year}. Его бонус ${bal}`)
    }
}

bonus(5);
