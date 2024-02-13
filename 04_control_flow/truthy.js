const userEmail = {}

if(userEmail){
    // console.log("Got user Email");
}
else{
    // console.log("Don'i have user email");
}

// falsy value  
// false, 0, -0, BigTnt 0n, "", null, undefined, Nan

// truthy value
// "0", 'false', " ", [], {}, function(){} 


// if(userEmail.lenth === 0){
//     console.log("Array is empty");
// }


// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }


// Null Coalescing Operator (??): null undefined

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 30
val1 = null ?? 10 ?? 20

console.log(val1);


// Ternary Operator

// condition ? true : false

const iceTeaPrice = 562
iceTeaPrice >= 500 ? console.log(true) : console.log(false);
