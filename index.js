// console.log(" hello from muhammed")

// const name = " alex"
// console.log(name)

// var let const

// rules of declaring a variable

// 1) cannot be a javascript reserved
// if var return else 

//2) make sure it is meaningful
// let theNameOfTheFirstPerson = " muhammed"

// 3) it connot start with a Number
// const name1= "alex"

// 4) cannot contain hyphen, space and some symbols
// - / * ? % #
// const name3 = "kenny"

// 5) it is case sensitive
// var firstname = "yourel"
// var firstName = "yourel" (camelCase notation)

// let firstName = "kenny"
// let lastName = " ogunayde"
// console.log(firstName, lastName)

// const moneyPaid = 200;
// moneyPaid = 500
// console.log(moneyPaid)

//primitive data types
// string number boolean undefined null

// let name = " kehinde"
// let age = 40
// let isApproved = true
// let firstName
// let selectedColor = null

// console.log(typeof(selectedColor))

// refrence type
// objects array function

// let person = {
//     name: 'kenny',
//     age: 40
// }

// console.log(person)

// array 
// let selectedColors = ['red', 'blue', 12, null];
// console.log(selectedColors);


// // function 
// function add (x, y) {
//     return x + y
// }

// console.log(add(20, 30))

//STRING CONCATENATION 
// let name = "Fola"
// let age = 99

// Archaic method
// console.log('My name is ' + name + ' and I am ' + age);

// Template literals
// console.log(`my name is ${name} and i am ${age}`)

// String Methods and Properties

// let s = "hello world"
// let word
// word = s.substring(5, 9)
// console.log(word)

//ARRAY METHODS & PROPERTIES
// const colors = ['black', 'white', 'red', 'blue'];
// colors.push('yellow')
// colors.unshift('purple')
// colors.pop()
// colors.shift()
// console.log(colors[3])

//ARITHMETIC OPERATORS
// + , - , * , / , % , ++ , -- , **

// console.log(13-2)
// console.log('3'*'2')
// console.log(3*'TEXT')
// console.log('10'/'2')
// console.log(10%2)
// console.log(10%3)
// console.log('3'**'2')

// console.log(5+3)
// console.log(5+'3')


// let y = 5
// console.log(--y)
// console.log(y)

//OBJECT LITERIALS
// const person = { // an object is a collection of key-value pairS
// firstName: 'Adam',
// age: 30,
// hobbies: ['music', 'movies', 'sports'],
// address: {
// street: '66 Main st',
// city: 'wtvr',
// state: 'over there'
// }
// };
// person.email = 'adam12@gmail.com'
// person.firstName = 'tolu'
// delete(person.age)

// person.hobbies.push("playing too much")
// console.log(person)


//COMPARISON OPERATORS
// = assigns a value to a variable*

// == compares the value of the variables

// === compares the value and type of the variables

// ! returns the opposite boolean

// != compares the inequality based on value

// !== compares the inequality based on value and type

// LOGICAL OPERATORS
// Thats the AND(&&), OR(||) and the NOT(!) operators

// LOOPS

// const numbers = [80, 29, 25]

// for (let i = 0; i < numbers.length; i++) {
// console.log(numbers)
// }

//while loop
// let i = 0;
// while(i <= 10) {
//   console.log(`while loop number: ${i}`) 
//   i++
// }

//CONDITIONALS
// **** Simple If/Else Statement
// const x = '10';

// if (x === 10) {
// console.log('x is 10');
// } else if (x > 10) {
// console.log('x is greater than 10');
// } else {
// console.log('x is less than 10');
// }

// const color = "pink"

// if ( color === 'red') {
//     console.log('color is red')
// } else if (color === "blue") {
//     console.log("color is blue")
// } else if (color === "grey") {
//     console.log("color is grey")
// } else if (color === "black") {
//     console.log("color is black")
// } else {
//     console.log('color is not present')
// }





// switch (color) {
// case 'red':
// console.log('color is red');
// break;
// case 'blue':
// console.log('color is blue');
// break;
// default:
// console.log('color is neither red nor blue');
// }


//  let color = 'red';

 // statement ? true : statement ? true : false
//  let colorQualified = color === "red" ? "is red" : "isn't red";
//  console.log(`Color ${colorQualified}!`);


//  let number = -20

//  let num = (number === 0) ? "zero" : (number > 1) ? "positive" : "negative";

//  console.log(num)    


// function name () {}


// function greet(name) {
//     return `hello ${name}`
// }
// console.log(greet("muhammed"))

// function add(a ,b) {
//    return a + b
// }

// console.log(add(40, 60))

// function modulo(a ,b) {
//    return a % b
// }

// console.log(modulo(1726646642, 70))

// let div = document.querySelector('#header');
// let div2 = document.getElementById('header')
// let newDiv = document.createElement('h1');

// div2.innerHTML = "Hello from tolu, muhammed, kenny, alex"
// div.parentNode.replaceChild(div2, div);

//Algorithms 101

// const a = 10
// const b = 20
 
// function add (a, b) {
//     a = 10,
// b = 20
//     c = a + b 
//     console.log(c)
// }
// add()


// a = 10;
// b = 20;
// c = a + b

// console.log(c)

// num1 = 20
// num2 = 40
// num3 = 12

// totalNum = num1 + num2 + num3

// console.log(totalNum)
// you to be abit grounded in JS(javascript)

//Problem Question: Given the existing code below, write a code so that their values are switched around.
// DONTS
//1) Do not change any of the existing code
//2) You are not allowed to type any numbers
//3) You should not redeclare variable a and b

// var a = "5";
// var b = "10";
//***** Do not change the code above *****
//write your code below



//*** Do not change the code below */
// console.log('a is ' + a);
// console.log('b is ' + b);


// ASYMPTOTIC NOTATION
// (mathematical tolls to represent time and space complexity)
//1. big-O Notation( worst case complexity)
//2. Omega Notation(best case complexity)
//3.Theta Notation (Average case complexity)

// O(n) is linear time complexity
// means as the inputs size increases the time complexity also increases

// O(1) constant time complexity

// const arr  = [ apple, mango, orange, pineapple]

//characteristics of bigO notation
//1. it is expressed interms of input size
//2. focusing on the bigger picture without getting caught in the minute detail

function summation(n) {
    let sum = 0 // 1 time

    for (let i = 1; i <= n; i++) { // 4times
        sum += i
    }
    return sum // 1 time 
}

console.log(summation(10))


