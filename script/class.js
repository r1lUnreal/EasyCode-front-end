// for (let i = 0; i < 10; i++) {
//     // i = 0, True
//     // i ++ = 1, True
//     // i ++ = 2, True
//     // i ++ = ..., True
//     // i ++ = 9, True
//     console.log('итерация №', i)
// }


// for (let c = 10; c <= 100; c += 2) {
//     console.log('четное число', c)
// }


// for (let k = 100; k > 0; k -= 10) {
//     console.log(k)

//     // 100, 90, ... 10!, || 0 > 0 = false
// }

// for (let i = 1; i <= 10; i++) {
//     console.log('привет')
// }

// for (let i = 3; i < 20; i += 2) {
//     console.log('#', i)
// }

// for (let i = 2; i <= 9; i ++) {
//     for (let k = 2; k <= 9; k ++) {
//         console.log(`${i} * ${k} = ${i * k}`)
//     }
// }

// function draw(col, row) {
//     for (let r = 0; r < row; r++) {
//         line = '';
//         for (let c = 0; c < col; c++) {
//             line += '*';
//         }
//         console.log(line)
//     }
// }

// draw(1, 10);


// function paralelopipet(col, row) {
//     for (let s = 0; s < 5; s++) {
//         line = ''
//         for (let d = 0; d < 5; d++) {
//             line += '#'
//             console.log(line)
//         }
//         break;
//     }
// }

// paralelopipet()

let i = 0;
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        console.log('exit');
        break;
    }
}
console.log(i)
