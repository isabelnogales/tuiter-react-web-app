//alert("Hello World!")
console.log("Hello World")


// 2.4 VARIABLES AND CONSTANTS

// ------------------- //
console.log('Variables and Constants');
global1 = 10;
var functionScoped = 2;
let blockScoped = 5;
const constant1 = global1 + functionScoped - blockScoped;

console.log(global1)
console.log(functionScoped)
console.log(blockScoped)
console.log(constant1)

// Variables Types //

console.log('Variable types');
let numberVariable = 123;
let floatingPointNumber = 234.345;
let stringVariable = 'Hello World!';
let booleanVariable = true;
let isNumber = typeof numberVariable;
let isString = typeof stringVariable;
let isBoolean = typeof booleanVariable;

console.log(numberVariable)
console.log(floatingPointNumber)
console.log(stringVariable)
console.log(booleanVariable)
console.log(isNumber)
console.log(isString)
console.log(isBoolean)

// Boolean Variables //

console.log('Boolean Variables');
let true1 = true;
let false1 = false;
let false2 = true1 && false1;
let true2 = true1 || false1;
let true3 = !false2;
let true4 = numberVariable === 123;
let true5 = floatingPointNumber !== 312.432;
let false3 = numberVariable < 100;
let sortaTrue = '1' == 1
let notTrue   = '1' === 1

console.log(true1)
console.log(false1)
console.log(false2)
console.log(true2)
console.log(true3)
console.log(true4)
console.log(true5)
console.log(false3)
console.log(sortaTrue)
console.log(notTrue)

// 2.5 CONDITIONALS

// If else -- no entiendo que hace  !!!//

console.log("If else");
if(true1) {
    console.log(true);
}

if(!false1) {
    console.log('!false1');
} else {
    console.log('false1');
}

// Ternary Conditional Operator //

console.log('Ternary conditional operator');
const loggedIn = true;
// return welcome if true , return please login if false
// as loggedIn= true -- > return welcome
const greeting = loggedIn ? 'Welcome!' : 'Please login';
console.log(greeting)

// 2.6 FUNCTIONS

//Legacy ES5 function//

console.log('Legacy ES5 function')
function add (a, b) {
    return a+b
}
const twoPlusFour = add(2,4)
console.log(twoPlusFour)

//ES6 Functions//

console.log('New ES6 functions')
const subtract = (a,b) => {
    return a-b;
}
const threeMinusOne = subtract(3,1)
console.log(threeMinusOne)

//Implied returns//

console.log('Implied return')
const multiply = (a, b) => a * b;
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);

// Optional Parenthesis and parameters //
//ONLY if it has just 1 parameter

console.log('/Parenthesis and parameters')
const square = a => a * a;
const plusOne = a => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);
console.log(twoSquared)
console.log(threePlusOne)

// 2.7 ARRAYS

// Different data types ---- No entiendo !!!!!//
// number arrays, string arrays, and even a mix and match of datatypes in the same array
console.log("Arrays")
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];
let variableArray1 = [functionScoped, blockScoped, constant1, numberArray1, stringArray1];
console.log(numberArray1)
console.log(stringArray1)
console.log(variableArray1)

// Array index and length//
console.log("Array index and length")
//length of array
const length1 = numberArray1.length;
//index of the element in the array
const index1 = numberArray1.indexOf(3);


// Adding and Removing Data to/from Arrays//
console.log("Adding and removing data to arrays")
// push - > append it at the end of the array
console.log(stringArray1)
console.log(variableArray1)
numberArray1.push(6);
stringArray1.push('string3');
console.log(stringArray1);
console.log(variableArray1);
// splice - > can remove/add an element anywhere in the array
numberArray1.splice(2, 1);
stringArray1.splice(1, 1);
console.log(stringArray1);
console.log(variableArray1);