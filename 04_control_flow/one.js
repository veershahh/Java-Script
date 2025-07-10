// if 

const isUserLoggedIn = true;
const temperature = 30;

// if (temperature < 40) {
//   console.log("less than 40");
// }else {
//     console.log("temuperature is greater than 40" );
// }

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`You have the power to ${power}`); 
// }
// console.log(`You have the power to ${power}`); 



// const balance = 1000;

// if (balance > 500) console.log("You can withdraw money"), console.log("You can buy a car");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 1000) {
//     console.log("less than 1000");
// } else {
//     console.log("greater than 1000");
// }


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
    console.log("Allow to buy product");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}