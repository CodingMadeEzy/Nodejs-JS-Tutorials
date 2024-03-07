///////////////// INHERITANCE ///////////////// 


// class AnimalTree {
//     constructor(name, age) {

//         this.name = name;
//         this.age = age;
//     }


//     tellMeYourName(){
//         console.log("My name is ",this.name);
//     }
// }


// class Cat extends AnimalTree{

//     constructor(name,age,breed){
//         super(name,age);
//         this.breed = breed;
//     }

//     tellMeYourBread(){

//         console.log("My breed is ",this.breed);
//     }
// }



// //example
// var cat = new Cat("Dog",12,"Bull dog");


// console.log(cat.tellMeYourName());



///////////////// ABSTRACTION ///////////////// 

// function Shape() {
// }
// Shape.prototype.calculateArea = function () {

// }
// Shape.prototype.calculateVolume = function () {

// }

// function Cube() {
//     Shape.call(this);
// }
// Cube.prototype = Object.create(Shape.prototype);
// Cube.prototype.constructor = Cube;





// class Cube extends Shape {
//     constructor(side) {
//         super();
//         this.side = side;
//     }


//     calculateArea() {
//         console.log("Area is ", this.side * this.side);
//     }

//     calculateVolume() {
//         console.log("Volume is ", this.side * this.side * this.side);
//     }
// }


// var cube = new Cube(10);

// cube.calculateArea();
// cube.calculateVolume();



// function Shape() {
// }
// Shape.prototype.calculateArea = function () {

// }
// Shape.prototype.calculateVolume = function () {

// }

// function Cube(side) {
//     Shape.call(this);
//     this.side = side;
// }
// Cube.prototype = Object.create(Shape.prototype);
// Cube.prototype.constructor = Cube;

// Cube.prototype.calculateArea = function () {
//     console.log("Area is ", this.side * this.side);
// }


// Cube.prototype.calculateVolume = function () {
//     console.log("Volume is ", this.side * this.side * this.side);
// }

// var cube = new Cube(10);
// cube.calculateArea();
// cube.calculateVolume();




///////////////// ENCAPSULATION ///////////////// 

class Counter {

    constructor(count) {
        this.count = count;
    }

    increment() {
        this.count++;
    }
    getCount() {
        console.log("Count value is ", this.count);
    }
}

let counter1 = new Counter(10);

counter1.getCount();

counter1.increment();
counter1.increment();
counter1.getCount();


let counter2 = new Counter(320);
counter2.getCount();