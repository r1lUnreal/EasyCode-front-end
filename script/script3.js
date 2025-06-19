class Shape {
    constructor() {

    }

    getArea() {
        throw new Error("error");
    }
}

class Triangle extends Shape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }

    getArea() {
        return (this.base * this.height) / 2;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}

const run1 = new Triangle(5, 10);
const run2 = new Rectangle(5, 10);
const run3 = new Circle(10);

console.log(run1.getArea());
console.log(run2.getArea());
console.log(run3.getArea()); 
