// primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol,
//  BigInt
const score = 100
const scoreValue = 100.3

const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol('123') 
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 548623684321357465132155n

//reference (Non primitive)

// Array, Objects, Functions

// const Heros = {"IronMan", "CaptainAmerica", "Thor"};
// let myObj = {
//     name: "Aditya",
//     age: 23,
// }

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);




let myYoutubename = "AdityaSharmaJR"
 
let anothername = myYoutubename
anothername = "unfiltered"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "asli@ybl"
}
let userTwo = userOne

userTwo.email = "Aditya@google.com"

console.log(userOne.email);
console.log(userTwo.email);