const marvel_Heroes = ["thor", "ironman","spiderman"];
const dc_Heroes = ["batman", "superman", "flash"];

// marvel_Heroes.push(dc_Heroes)
// console.log(marvel_Heroes)
// console.log(marvel_Heroes[3][1]); // Accessing "superman" from the nested array

// const Allheroes = marvel_Heroes.concat(dc_Heroes)
// console.log(Allheroes)

const All_New_Heroes = [...marvel_Heroes, ...dc_Heroes];
// console.log(All_New_Heroes);

const Another_array = [1,2,3,[4,5,6],7,8,[5,6,7,8],9,10];   

// const Flattened_array = Another_array.flat(Infinity);
// console.log(Flattened_array);

console.log(Array.isArray("VeerShah"));
console.log(Array.from("VeerShah"));
console.log(Array.from({name: "veer"})); // Instresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [100, 200, 300]
