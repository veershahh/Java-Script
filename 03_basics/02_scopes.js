// var a = 300;
let a = 400;

if(true){
    let a= 10
    const b= 20
    // console.log("INNER:",a); 
}

// console.log(a);
// console.log(b);
// console.log(c); // This will log 30, as 'c' is declared with var and is hoisted to the global scope


// +++++++ Nested Function ++++++++

function one() {
    const username = "veer";

    function two() {
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);

    two();
}
// one();

if (true) {
    const username = "veer";
    if (true) {
        const website = " youtube";
        // console.log(username + website);
    }
    // console.log(website); 
}
// console.log(username); 


// +++++++++++++++   Intresting +++++++++++++++++

console.log(addone(5)); 
function addone (num){
    return num + 1;
}


const addTwo = function(num) {
    return num + 2;
}
addTwo(5);