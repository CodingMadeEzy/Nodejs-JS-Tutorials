// class Brick {
//     constructor(height, widht, length) {
//         this.height = height;
//         this.widht = widht;
//         this.length = length;
//     }

//     seerPhodo() {
//         console.log("Mne seer phod diya");
//     };

//     tellMeAboutYourHeight() {
//         console.log("My height is ", this.height);
//     };
// }


// let brick1 = new Brick(14.25, 12.25, 50);


// console.log(brick1.height);
// brick1.seerPhodo();
// brick1.tellMeAboutYourHeight();


/////////// 
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    tellYourName() {
        console.log("I am ", this.name);
    }
}


class Dog extends Animal {

    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }

    tellMeYourNameAndBreed() {
        console.log(`I am ${this.name} of ${this.breed}`);
    }
}


let petty = new Dog("Petty", 12, "Bull Dog");

petty.tellMeYourNameAndBreed();
