// Dates

let myDate = new Date(); // Current date and time
// console.log(myDate); // e.g., 2023-10-01T12:00:00.000Z
// console.log(myDate.toString());
// console.log(myDate.toDateString()); // e.g., Sun Oct 01 2023
// console.log(myDate.toTimeString()); // e.g., 12:00:00 GMT+0000 (Coordinated Universal Time)
// console.log(typeof myDate); // object
// console.log(myDate.toISOString()); // e.g., 2025-10-01T12:00:00.000Z
// console.log(myDate.getFullYear()); // e.g., 2025

let myCreatedDate = new Date('07-08-2025'); // Specific date and time

let myTimeStamp = Date.now(); // Current timestamp in milliseconds since 1970-01-01T00:00:00Z
// console.log(myTimeStamp); // e.g., 1700000000000
// console.log(myCreatedDate.getTime());
// console.log(Math.floor((Date.now()/1000))); // Current timestamp in seconds

let newDate = new Date()
console.log(newDate); 
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
}); // e.g., Sunday, 2023
