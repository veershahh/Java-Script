const coding = ["js","rb","py","java","cpp"]

// coding.forEach( function (val) {
    // console.log(val);
// } )

// coding.forEach( (val) =>{
//     console.log(val);
// } )

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item ,index, arr) => {
//     console.log(item, index, arr);
    
// })

const myCoding = [
    {
        languageName : "JavaScript",
        languageFileName : "js"
    },
    {
        languageName : "Pythoon",
        languageFileName : "py"
    },
    {
        languageName : "Java",
        languageFileName : "java"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})