// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}

const greeting = "Hello World!"

for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
    
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State Of America")
map.set('JAP', "JAPAN")

// console.log(map);


for (const [key,value] of map) {
    // console.log(key, ":-", value);
    
}

const myObject = {
    'game1': "BGMI",
    'game2': "GTA"
}

// for (const [key,value] of myObject) {
//     console.log(key, ":-", value);
    
// }
