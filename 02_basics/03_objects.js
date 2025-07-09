// singleton
// Object.create


//object literals

const mySym = Symbol("key1");

const jsUser = {
    name: "Veer",
    "Full Name": "Veer Shah",
    [mySym]: "This is a symbol key",
    age: 22,
    location: "Surat",
    email: "veer@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
}

// console.log(jsUser.name);
// console.log(jsUser["name"]); 
// console.log(jsUser["Full Name"]); // Accessing using bracket notation
// console.log(jsUser[mySym]); // Accessing symbol key

jsUser.email = "veer@chatgpt.com";
// Object.freeze(jsUser); 
jsUser.email = "veer@microsoft.com";
// console.log(jsUser); 


jsUser.greeting = function() {
    console.log("Hello Js User");
}
jsUser.greetingtwo = function() {
    console.log(`Hello Js User,${this.name}`);
}

// console.log(jsUser.greeting);
console.log(jsUser.greeting()); 
console.log(jsUser.greetingtwo());