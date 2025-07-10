// function sayMyName(){
//     console.log("v");
//     console.log("e");
//     console.log("e");
//     console.log("r");
// }
// sayMyName();

// function addTwoNumbera(num1,num2){
//     console.log(num1 + num2);
// }

function addTwoNumbera(num1,num2){
    // let result = num1 + num2;
    // return result;
    return num1 + num2; // This is a more concise way to return the result
}


const result = addTwoNumbera(3,4)
// console.log("Result:" , result);

function loginUserName(username) {
 // if (username === undefined) 
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `Your are just logged in ${username}`;
}

// console.log(loginUserName("veer"));
// console.log(loginUserName());

// +++++++ Claculate Card Price ++++++++

function calculateCardPrice(...num1) {
    return num1;
}

// console.log(calculateCardPrice(200, 500, 800, 1000));

const user = {
    username: "veer",
    price: 199,
}

function handelObject(anyObject) {
    console.log(`Username is ${anyObject.username}, Price is ${anyObject.price}`);   
}

// handelObject(user);
// handelObject({
//     username: "sahil",
//     price: 399,
// })

const myNewArray = [200, 500, 800, 1000];

function returnSecondValue(array) {
    return array[2];
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 500, 800, 1000]))