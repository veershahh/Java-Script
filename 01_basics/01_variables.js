/*
prefer not to use var, use let or const instead
const is used for variables that should not change, like accountId
let is used for variables that can change, like accountEmail and accountCity
var is an older way to declare variables, but it's generally recommended to use let or const in modern JavaScript
*/

const accountId = 2312005  // Using const for accountId as it should not change
let accountEmail = "jainveer@gmail.com" // Using let it can change
var accountPassword = "123abc"
accountCity = "Surat"

// Displaying account details

console.log("Account ID:", accountId);
console.log("Account Email:", accountEmail);
console.log("Account Password:", accountPassword);
console.log("Account City:", accountCity);



// console.table({
//   "Account ID": accountId,
//   "Account Email": accountEmail,
//   "Account Password": accountPassword,
//   "Account City": accountCity
// });

// Changing account details
accountEmail = "veer@gmail.com"