let score = "33"; // string

// console.log(typeof score); // number

let valueInNumber = Number(score); // converting string to number
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // 33

// "33" => 33
// "33abc" => NaN (Not a Number)
// true => 1; false => 0

let isLoggedIn = 1; // boolean
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); // true

// 1 => true; 0 => false
// "" => false
// "abc" => true

let someNumber = 33;
let stringNumber = String(someNumber); // converting number to string
// console.log(typeof stringNumber); // string
// console.log(stringNumber); // "33"

// ******************** oprations ********************
let value = 3
let negativeValue = -value; // negative value
// console.log(negativeValue); // -3

// console.log(3 + 4); // addition
// console.log(3 - 4); // subtraction
// console.log(3 * 4); // multiplication
// console.log(3 / 4); // division
// console.log(3 % 4); // modulus (remainder of division)
// console.log(3 ** 4); // exponentiation (3 raised to the power of 4) => 81
// console.log(3 + 4 * 2); // 3 + (4 * 2) => 11
// console.log((3 + 4) * 2); // (3 + 4) * 2 => 14

// console.log("1" + 2); // string concatenation => "12"
// console.log(1 + "2"); // string concatenation => "12"
// console.log("1" + "2"); // string concatenation => "12"
// console.log(1 + 2 + "3"); // 3 + "3" => "33"
// console.log("1" + 2 + 3); // "1" + 2 => "12" + 3 => "123"


let gameCounter = 100;
gameCounter++; // increment by 1
console.log(gameCounter); // 101