const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by app"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
       
}

const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
    // console.log(programming[key]);
    
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State Of America")
map.set('JAP', "JAPAN")

// console.log(map);


for (const [key,value] in map) {
    // console.log(key, ":-", value);
    
}