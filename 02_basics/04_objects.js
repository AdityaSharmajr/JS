// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Aditya",
            lastname: "Sharma"
        }
    }    
}
// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "Aditya2gmail.com"
    },
    {
        id: 1,
        email: "Aditya2gmail.com"
    },
    {
        id: 1,
        email: "Aditya2gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedin'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor : Instructor} = course

// console.log(coursecInstructor);
console.log(Instructor);
// destructuring
// const navbar = ({company}) => { 

// }

// navbar(company = "aditya")



// {
//     "name": "aditya"
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
