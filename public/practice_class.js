// FUNCTIONS (1 - long way , 2- simplify way)
const subtract = (a, b) => {
    return a - b;
}
const threeMinusOne = subtract(3, 1);
console.log(threeMinusOne);

const multiply = (a,b) => a*b ;
const twotimesthree = multiply (2,3);
console.log(twotimesthree);

// ARRAYS

const a=3;
const b=27;
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];
let variableArray1 = [a,b,numberArray1,stringArray1];
console.log(variableArray1);

// --- Index array

//result = 5
const length1 = numberArray1.length;
// result = 2
const index1 = numberArray1.indexOf(3);
// result 4
const bigger3 = numberArray1.find(x => x >3);
// result 2
const indexbigger3 = numberArray1.findIndex(x => x >3);
// result [4,5]
const listbigger3 = numberArray1.filter(x => x >3);

// -- Adding and removing data

numberArray1.push(6)
//empezando en posicion 2 eliminar 2 elementos
const deletelem = numberArray1.splice(2, 2);

// -- Map : iterate over arrays values and apply a function to each value and put the result in a new array

const cubes = numberArray1.map(a => a * a * a);
// dentro de map() puedes llamar a otra const creada anteriormente , por ejemplo
const square = a => a*a
const squares = numberArray1.map(square);

// -- Filter:function can look for elements that meet a criteria and put them in a new array

const oddNumbers = numberArray1.filter(a => a % 2 !== 0);

// TEMPLATE STRINGS

const five = 2 + 3;
const result1 = "2 + 3 = " + five;
console.log(result1);

const result2 = `2 + 3 = ${2 + 3}`;
console.log(result2);

const username = "alice";
const greeting1 = `Welcome home ${username}`;
console.log(greeting1);

loggedIn = false;
const greeting2 = `Logged in: ${loggedIn ? "Yes" : "No"}`;
console.log(greeting2);




const Question = () => {
    let A = {
        C: 'F',
        D: 'G'
    }
    let B = {
        D: 'H',
        E: 'I',
        ...A,
    }
    A = {
        ...B,
        D: 'J',
        E: 'K'
    }
    return(
        <>
            <h1>{A.C}</h1>
            <h2>{B.D}</h2>
            <h3>{A.E}</h3>
        </>
    )
}
export default Question;



