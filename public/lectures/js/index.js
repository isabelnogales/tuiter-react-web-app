//alert("Hello world !!")

const welcome = document.getElementById("welcome")
welcome.innerHTML = "Welcome to Web Development"
welcome.style.color= "red"
// para que no salga el titulo
//welcome.style.display = "none"


console.log("Hello world")
const a =123;
const b =234;
const c =a+b;
console.log(c);
//doing it programatically (minuto 19)
document.write("<h2>Hello from JavaScript</h2>")

// long option
document.write("<h2>Hardcoded List</h2>")
document.write("<ul>")
document.write("<li>a = "+a+" </li>")
document.write("<li>b = "+b+" </li>")
document.write("<li>c = "+c+" </li>")
document.write("</ul>")

// BETTER OPTION
//las comillas son diferentes ( `` )
document.write("<h2>List with string templates</h2>")
document.write(`
            <ul>
                <li>a = ${a} </li>
                <li>b = ${b} </li>
                <li>c = ${c} </li>
            </ul>`)

//
const grades=[1,2,3,98,87,76,65,54,43,32,21]
document.write("<h2>List an array</h2>")
document.write("<ul>")
// i=i+2 para ir de dos en dos
for (let i=0; i<grades.length; i++){
    //document.write("<li>grades[i] = "+grades[i]+" </li>")
    document.write(`<li>grades[${i}] = ${grades[i]} </li>`)
}
document.write("</ul>")


//const grades=[98,87,76,65,54,43,32,21]
const passingGrade = 65
document.write(`grades=${grades}<br/>`)
//OLD WAY TO WRITE IT

//const passingGrades = grades.filter(
    //function (grade,index){
        //console.log(index,grade)
        //if ( grade >= passingGrade){
            //return true;
        //}
        //return false;
    //}

//NEW AND COMPACT WAY (CLASE min 48)
const passingGrades = grades.filter(
    (grade) => {
        return grade >= passingGrade;
    }
)
//even more compact way
//const passingGrades = grades.filter(grade => grade >= passingGrade)
document.write(`passingGrades=${passingGrades}<br/>`)

//Calculate the squares of the grades
// --ver la otra forma larga en minuto 53
// --return no necesario
// --const squares = grades.map((grade) =>{return grade * grade} )
const squares = grades.map(grade => grade * grade)
document.write(`squares=${squares}<br/>`)

//Maps over strings
// -- use join to remove the comas between number and number
const gradesStrings = grades.map((grade) => `<li>${grade}</li>`).join('')
document.write(`gradesStrings=${gradesStrings}<br/>`)


//Find element 76
const seventySix = grades.find((grade) => grade === 76)
document.write(`seventySix=${seventySix}<br/>`)
//Find index of element 76
const seventySixIndex = grades.findIndex((grade) => grade === 76)
document.write(`seventySixIndex=${seventySixIndex}<br/>`)


//Acedemos a la simple calculator

function add(){
    //--this elements by default are strings , we have to convert them to integers
    //-- hay que ponerlos aqui para cuando cambiemos los valores nos funciones
    const xVal = parseInt(xDom.value)
    const yVal = parseInt(yDom.value)
    zDom.value = xVal + yVal
}
 //-- esta es la nueva manera de crear funciones , podemos utilizar la que queramps
const substract = () => {
    const xVal = parseInt(xDom.value)
    const yVal = parseInt(yDom.value)
    zDom.value = xVal - yVal
}

const xDom = document.getElementById("X")
const yDom = document.getElementById("Y")
const zDom = document.getElementById("Z")

//--this elements by default are strings , we have to convert them to integers
const xVal = parseInt(xDom.value)
const yVal = parseInt(yDom.value)


//--
document.write("<h2>JSON (JavaScript Object Notation) </h2>")

const age = 23
const firstName = "Alice"
//por asi decirlo aqui creas "el objeto" al que llamas luego
const alice = {
    username : "alice",
    password : "alice123",
    // hace referencia a la constante firstName declarada arriba
    fName : firstName ,
    lName : "Wonderland",
    age : age,
    favouriteBooks : [
        "Dune", "LOTR" , "Enders Game" ],
    dob:new Date()

};
document.write(`username : ${alice.username} <br/>`)
document.write(`fName : ${alice.fName} <br/>`)

const bob ={
    username : "bob",
    fName : "Bob",
    lName : "Hope"

}

//CUIDADO! esto es una lista
const users = [
    alice,bob
]

document.write ( `fName: ${users[1].fName}<br/>`)

// get just the usernames of the elements in users list
document.write ( `
    <ul>
        ${
    users.map(user => `<li>${user.username}</li>`).join("")}         
    </ul>
<br/>`)

//Create a table

// -- 1 WAY
//document.write( `
    //<table border="1">
        //<tr>
            // (NOTA) labels
            //<th>Username</th>
            //<th>First name</th>
            //<th>Last name</th>
        //</tr>
        //${
           // users.map(user =>`
                //<tr>
                    //<td>${user.username}</td>
                    //<td>${user.fName}</td>
                    //<td>${user.lName}</td>
                //</tr>
            //`).join("")
       // }
       // <!--/table-->
//`)


// -- 2 WAY

const userTableRows = (user) => (`
${
    users.map(user => `
                <tr>
                    <td>${user.username}</td>
                    <td>${user.fName}</td>
                    <td>${user.lName}</td>
                </tr>
            `).join("")

}`)

document.write( `
    <table border="1">
        <tr>
            <th>Username</th>
            <th>First name</th>
            <th>Last name</th>
        </tr>
        ${userTableRows(users)}
        
    </table>
`)
