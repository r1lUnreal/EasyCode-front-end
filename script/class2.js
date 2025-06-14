// let student = {
//     'name': 'ilya',
//     'age': 15,
//     'easycoin': '~616',
//     'curs': 'основа Full Stack разработки'
// };

// for (let key in student) {
//     console.log(`${key}: ${student[key]}`);
// }


let translator = {
    'мир': 'world',
    'путин': 'car mira',
    'привет': 'hello - hi',
    'свет': 'light',
    'белый': 'white',
    'чёрный': 'black'
};

function translate(word){
    if (word in translate){
        return translate[word]
    }
    else {
        return 'don`t slova takie tut'
    }
}

let slovo = prompt('Введите слово для перевода')
alert(translate(slovo))

for (let key in translator){
    console.log(key, '-', translator[key])
}
