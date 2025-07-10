const user = {
    username: "veer",
    price: 999,

    welcomemessage: function() {
        console.log(`${this.username}, Welcome to website`);
        console.log(this);
        
    }
}
// user.welcomemessage()
// user.username = "sahil";
// user.welcomemessage()

// console.log(this);

// function chai(){
//     let usrename = "veer";
//     console.log(this.username);
// }

// chai();

// const chai = function() {
//     let usrename = "veer";
//     console.log(this.username);
// }

const chai = () => {
    let usrename = "veer";
    console.log(this.username);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }  

// const addTwo = (num1, num2) => num1 + num2; // This is a concise way to return the sum of num1 and num2

// const addTwo = (num1, num2) => (num1 + num2) // This will return the sum of num1 and num2

const addTwo = (num1, num2) => ({username: "veer"}) // This will return an object with the username property


console.log(addTwo(5, 10));