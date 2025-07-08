// primitive data types 

// 7 types String, Number, BigInt, Boolean, Symbol, Null, Undefined

const id = Symbol('id'); // Symbol is a unique identifier
const name = 'John'; // String
const age = 30; // Number
const isActive = true; // Boolean
const bigNumber = 115615615615151561651561165n; // BigInt
const nothing = null; // Null
let notDefined; // Undefined

//refrence types (non-primitive data types)

// Object, Array, Function

const person = {
  id: 21,
  name: "Veer",
}
const numbers = [1, 2, 3, 4, 5]; // Array

const myfunction = function() {
  console.log("This is a function");  
}
myfunction();

console.log(typeof id); // symbol


// ++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap (Non-Primitive)

// Stack: Stores primitive data types and references to objects
// Heap: Stores objects and functions

let myFriend = "Veer"; 
let myFriendTwo = myFriend; // Copy of the value, not a reference

myFriendTwo = "Sahil"; 
console.log(myFriend); // "Veer"
console.log(myFriendTwo); // "Sahil"

let userOne = {
  userEmail: "jain@gmail.com",
  age: 20,
};
let userTwo = userOne; // Reference to the same object in memory

userTwo.userEmail = "jainveer@gmail.com"; // Modifying userTwo also modifies userOne
console.log(userOne.userEmail);  
console.log(userTwo.userEmail); 