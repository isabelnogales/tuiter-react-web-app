//alert("Hello World!")
//console.log("Hello World")


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

//For Loops //
// i++ para que itere por cada elemento
console.log("For loops");
for (let i=0; i<stringArray1.length; i++) {
    const string1 = stringArray1[i];
    console.log(string1);
}

//The Map Function //
// map -> iterate over an array's values, apply a function to each value, and collate all the results in a new array.
console.log("Map function");
console.log(numberArray1);
const squares = numberArray1.map(square);
console.log(squares);
const cubes = numberArray1.map(a => a * a * a);
console.log(cubes);

//The Find Function //

console.log("Find function");
const four = numberArray1.find(a => a === 4);
const string3 = stringArray1.find(a => a === 'string3');
console.log(four);
console.log(string3);

// The Find Index Function //
console.log("Find index");
const fourIndex = numberArray1.findIndex(a => a === 4);
console.log(fourIndex);
const string3Index = stringArray1.findIndex(a => a === 'string3');
console.log(string3Index);

//The Filter Function //
console.log("The Filter Function");
const numbersGreaterThan2 = numberArray1.filter(a => a > 2);
console.log(numbersGreaterThan2);
const evenNumbers = numberArray1.filter(a => a % 2 === 0);
console.log(evenNumbers);
const oddNumbers = numberArray1.filter(a => a % 2 !== 0);
console.log(oddNumbers);

// 2.8 TEMPLATE STRINGS

console.log("Template Strings");
const five = 2 + 3;
const result1 = "2 + 3 = " + five;
console.log(result1);

const result2 = `2 + 3 = ${2 + 3}`;
console.log(result2);

const username = "alice";
const greeting1 = `Welcome home ${username}`;
console.log(greeting1);

// ERROR !!!!!!!!
//loggedIn = false;
//const greeting2 = `Logged in: ${loggedIn ? "Yes" : "No"}`;
//console.log(greeting2);


// 2.10 EXECUTING jQUERY SCRIPTS

const init = () => {
    console.log('Hello world from jQuery');
    /* do the rest of the lab work here */

    // 2.11 BINDING TO THE DOM

    console.log('Binding to DOM');
    const bindById = $('#bind-by-id');
    const bindByClass = $('.bind-by-class');
    console.log(bindById);
    console.log(bindByClass);

    // 2.12 CHANGING STYLE PROGRAMMATICALLY

    const changeStyle = $('#change-style');
    const changeStyle2 = $('.change-style');
    // we can put background-color
    changeStyle.css('color', 'red');
    changeStyle2.css('color', 'blue');

    // 2.13 GETTING AND SETTING ATTRIBUTES
    console.log("Get and set attributes")
    const getIdAttr = $("#get-id-attr");
    const id = getIdAttr.attr('id');
    console.log(id);

    const setClassAttr = $("#set-class-attr");
    setClassAttr.attr('class', 'class-0');

    // 2.14 ADDING AND REMOVING CLASSES
    const addClass1Example = $("#add-class-1");
    addClass1Example.addClass('class-1');

    const removeClass1Example = $("#remove-class-1");
    removeClass1Example.removeClass('class-2');

    // 2.15 HIDING AND SHOWING CONTENT
    const hideMe = $("#hide-me");
    hideMe.hide();

    const showMe = $("#show-me");
    showMe.show();

    // 2.16 CREATING NEW ELEMENTS

    const newLineItem = $("<li>Line item 1</li>");
    const anotherLineItem = $("<li>Line item 2</li>");

    // 2.17 APPENDING NEW ELEMENTS

    const ul = $("#append-new-elements");
        ul.append(newLineItem);
        ul.append(anotherLineItem);

    // 2.18 REMOVING AND EMPTYING CONTENT

    const removeLi =$("#remove-this");
    const emptyUl = $("#empty-this");
    removeLi.remove();
    emptyUl.empty();

    // 2.19 CHANGING CONTENT
    //para cambiarlo hay que acceder con el : nombreatributo.html()

    const changeThisText = $("#change-this-text");
    const changeThisHtml = $("#change-this-html");
    changeThisText.html('New text');
    changeThisHtml.html(`
                            <li>Line item A</li>
                            <li>Line item B</li>
                            <li>Line item C</li>`);

    // 2.20 NAVIGATING UP AND DOWN THE DOM TREE

    const child2 = $("#child-2");
    const parent1 = child2.parents("#parent");
    //have to put two times css() para cambiar el color y el fondo
    parent1.css('background-color', 'red').css('color', 'white');
    //solo cambia el color del children 2
    const parent = $("#parent");
    const child = parent.find("#child-2");
    child.css('background-color', 'blue')

    // 2.21 HANDING CLICK EVENTS

    const handleClick = () => console.log('Handle click');
    const clickable = $('.clickable');
    clickable.click(handleClick);

    // 2.22 EVENT TARGET
    //aparece como texto normal, pero cuando pinchas tiene el background y el color definido
    const handleEventTarget = (event) => {
        const target = event.target;
        console.log(target);
        $(target).css('background-color', 'blue').css('color', 'white');
    }
    const eventTarget = $("#event-target");
    eventTarget.click(handleEventTarget);

    // 2.23 HIDING AND SHOWING CONTENT

    let hideBtn, showBtn, hideShowHeader;
    hideBtn = $('#hide');
    showBtn = $('#show');
    hideShowHeader = $('#hide-show');
    const hideHandler = () => {
        hideShowHeader.hide();
    }
    const showHandler = () => {
        hideShowHeader.show();
    }
    hideBtn.click(hideHandler);
    showBtn.click(showHandler);

    // 2.24 CREATING A TODO LIST







































}
$(init);

