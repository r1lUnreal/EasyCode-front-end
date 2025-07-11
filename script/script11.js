const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple']// .sort();
const fruitsCount = fruits.reduce((accum, curVal) => {

    if (!accum[curVal]) {
        accum[curVal] = 1;
        return accum;
    }
    accum[curVal] ++;
    return accum;
}, {});

console.log(fruitsCount);







//? Другой вариант
// let pFruits, freq = 1;

// for (let i = 1; i < fruits.length; i++) {
//     if (fruits[i] == pFruits) {
//         freq++;
//     }
//     else if (pFruits !== undefined) {
//         console.log(`${pFruits}: ${freq}`);
//     }
//     pFruits = fruits[i];
//     freq = 1;
// }
