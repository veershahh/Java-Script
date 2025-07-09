// Array

const myArr = [1,2,3,4,5,6]
const myHeroes = ['Batman', 'Superman', 'Wonder', 'Flash', 'Green Lantern']

const myArr2 = new Array(1,2,3,4,5,6)
// console.log(myArr);

// Array methods
// myArr.push(7) // Add to the end
// myArr.push(8,9) // Add multiple to the end
// myArr.pop() // Remove from the end

// myArr.unshift(9) // Add to the beginning
// myArr.shift() // Remove from the beginning

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr =myArr.join()

// console.log(myArr);
// console.log(typeof newArr); // Convert to string

// Slice and Splice

console.log("A " , myArr);

const myn1 = myArr.slice(1, 3) // Slice from index 1 to 3 (not inclusive)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3) // Splice from index 1 to 3 (inclusive) and remove them

console.log("C ", myArr);
console.log(myn2);

