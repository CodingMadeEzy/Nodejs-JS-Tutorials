/////////////// HOISTING
// var a;
// let a;
// console.log(a);

//////////// Redeclaration

//can redeclare
// var a = 10;
// console.log(a);

// var a = 20;
// console.log(a);

///cannot redeclare
// let a = 10;
// console.log(a);

// let a = 20;

// HOW TO HACK GOOGLE - Done

///////////////////// DATATYPES /////////////////////

//STRING
var string = "Vipin"; // Anything inside double or single inverted comma is known as string

//NUMBER
var num = 10; //any type of number is known as num
var numDecimal = 1.2;
// integer, long, double, float

//BOOLEAN
var boolean = true; //1, 0 //anything that is either true or false is known boolean
var boolean2 = false;

////////// INTERVIEW HACK ///////////
//Q> difference between integer and boolean , why we use boolean.

//ARRAY
var array = [1, 2, 3, 4, 5, 6];

//Object
var object = { name: "john" };

//Undefined - value has not been assigned - value kbhi assign nhi hui
var x;

//Null - value is absent
var y = null;

/// typeof

// console.log(typeof string);
// console.log(typeof num);
// console.log(typeof numDecimal);
// console.log(typeof object);

// WHAT ARE FUNCTIONS

function firstFunction() {
  console.log("I am called and i will clean it");
}

firstFunction();


//Task - 3 function mohan, sohan, monitor