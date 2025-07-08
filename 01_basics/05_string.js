const name = "Veer";
const repoCount = 10

// console.log("Hello " + name + " your repo count is " + repoCount);

// String interpolation 
// console.log(`Hello ${name} your repo count is ${repoCount}`);

const gameName = new String("Call of Duty");

// console.log(gameName); // String object
// console.log(gameName.length); // 13
// console.log(gameName.toUpperCase());
// console.log(gameName[0]); 
// console.log(gameName.charAt(8)); // 'D'
// console.log(gameName.indexOf("Duty")); // 8
// console.log(gameName.lastIndexOf("o"));

const newString = gameName.substring(0, 8); // 'Call of '
console.log(newString);

const anotherString = gameName.slice(-10, 13); 
console.log(anotherString);

const stringWithSpaces = "   Hello World!   ";
console.log(stringWithSpaces);
console.log(stringWithSpaces.trim()); // 'Hello World!'

const url = "https://Veer.com/Veerr%20Shahh"

console.log(url.replace("%20","-"))

console.log(url.includes("Veer")); // true
console.log(url.startsWith("https")); // true