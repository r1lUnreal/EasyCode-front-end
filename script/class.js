// let names = []; // пустой
let names = ['Иван', 'Максим', 'Егор', 'Никита', 'Степан', 'Саша'];

// ___ДОБАВЛЕНИЕ
names.push('Вова')
names.push('Катя')
console.log(names)

// ___УДАЛЕНИЕ
names.pop()
console.log(names)


// __ИНДЕКСЫ
console.log(names[0])
console.log(names[2])

names[-1] = 'Александр'
console.log(names)

// __ПРОВЕРИТЬ НАЛИЧИЕ ЭЛЕМЕНТА
let a1 = names.includes('Никита') // возвращает true, если элемент есть или false, если элемента нету
console.log(a1)

let a = names.indexOf('Ни44кита')
if (a != -1) {
    console.log('есть такой')
} else {
    console.log('нет')
}

names = ['Иван', 'Максим', 'Егор', 'Никита', 'Степан', 'Саша'];
// удаление по индексу
names.splice(4, 1)
names.splice(0, 2)

// добавить по индексу
names.splice(3, 0, 'Костя') // индекс, сколько удалить, кого добавить
// на 3 индекс ставим костю, никого не удаляю
console.log(names)


names = ['Иван', 'Максим', 'Егор', 'Никита', 'Степан', 'Саша'];
names.splice(2, 3, 'Костя', 'Эльза')
console.log(names)
