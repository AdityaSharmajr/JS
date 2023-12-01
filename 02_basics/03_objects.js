// Singleton
// Object.create

// Object literals

const mySym = Symbol("Key1")


const JsUser = {
    name: "Aditya",
    "full name" : "Aditya Sharma",
    [mySym]: "myKey1",
    age: 23,
    location: "Delhi",
    email: "Aditya@google.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "Aditya@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "Aditya@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingtwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());