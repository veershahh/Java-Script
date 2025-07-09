// const tinderUser = new Object();
const tinderUser = {}

tinderUser.name = "Veer";
tinderUser.age = 22;
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regulerUser = {
    email: "some@gmail.com",
    fullname: {
        Userfullname : {
            firstname: "Veer",
            lastname: "Shah"
        }
    }
}

// console.log(regulerUser.fullname.Userfullname.firstname);


const obj1 = {1: "one", 2: "two", 3: "three"};
const obj2 = {4: "four", 5: "five", 6: "six"};

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2); // Merging two objects using Object.assign

// const obj3 = {...obj1, ...obj2}; // Merging two objects using spread operator
// console.log(obj3);


const users = [
    {
        id : 1,
        email: "v@gmail.com",
    },
    {
        id : 1,
        email: "v@gmail.com",
    },
    {
        id : 1,
        email: "v@gmail.com",
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); 

const course = {
    name: "Veer",
    price: 199,
    isPaid: true,
    courseDetails: "JavaScript"
}

// course.courseDetails

const {courseDetails} = course; // Destructuring.
const {courseDetails : details} = course; // Renaming destructured variable

// console.log(courseDetails);
console.log(details);


// {
//     "name": "Veer",
//     "age": 22,
//     "isLoggedIn": false,
//     "email": "demo@gmail.com",
// }

[
    {},
    {},
    {}
]