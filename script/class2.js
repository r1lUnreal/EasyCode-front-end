// class User{
//     constructor(a1, a2, a3, a4, a5){
//         // поля 
//         this.name = a1
//         this.lastname = a2
//         this.age = a3
//         this.login = a4
//         this.password = a5
//     }
// }

// // объект класса
// let user1 = new User('Илья', 'Попов', 15, 'rilUnreal', 'admin1');
// let user2 = new User('Дима', 'Путин', 15, 'dimon', 'admin2');

// user1.name = 'Илюфа';

class Car {
    constructor(brand, model, year, mileage, color) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
        this.color = color;
    }
}

class ElectricCar extends Car{
    constructor(brand, model, year, mileage, color, power){
        super(brand, model, year, mileage, color);
        this.power = power;
    }
}

let car1 = new Car('Porshe', '911-Turbo', 2024, '600 kilometers', 'Yellow')
let car2 = new Car('BMW', 'M3-G80/82', 2023, '500 kilometers', 'Gray')
let car3 = new ElectricCar('Tesla', 'Model X', 2015, '1000 kilometers', 'white', '1000 watts')
let car4 = new ElectricCar('Porshe', 'Taycan', 2023, '800 kilometers', 'black', '2000 watts')

// class Book{
//     constructor(author, title, pages){
//         this.author = author;
//         this.tititle = title;
//         this.pages = pages;
//     }
// }

// let book1 = new Book('Дмитрий Глуховский', 'Metro 2033', 384);
// let book2 = new Book('Дмитрий Силлов', 'Stalker', 228);


// class Human{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     say(){
//         console.log(`Привет, моё имя: ${this.name}`)
//     }
// }

// class Police extends Human{
//     constructor(name, age, status){
//         super(name, age);
//         this.status = status;
//     }
//     arest(){
//         console.log('Арестован!');
//     }
// }

// class Medic extends Human{
//     constructor(name, age, dep){
//         super(name, age);
//         this.dep = dep;
//     }
// }

// let a1 = new Police('Иван', 37, 'мусор');
// Police.name = 'Ваня';


// a1.say()
// a1.arest()

// let a2 = new Medic('Иван', 37, 'терапевт');

// a2.arest()
