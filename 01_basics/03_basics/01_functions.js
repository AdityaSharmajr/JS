
function sayMyName(){
    console.log("A");
    console.log("D");
    console.log("I");
    console.log("T");
    console.log("Y");
    console.log("A");
    
} 
// sayMyName()

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }
// addTwoNumber(4, 5)
// addTwoNumber(4, "5")
// addTwoNumber(4, "a")


function addTwoNumber(number1, number2){
    // let result = number1 + number2
    // return result
    //console.log("Aditya");//it will not print because function rrle : if function return then it will not be run further
    return number1 + number2
}

const result = addTwoNumber(4, 5)

// console.log("Result: ", result);

function loginUserMessage(username = "sam"){//sam is by default
    if(username === undefined){      //!username
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in` 
}
// console.log(loginUserMessage("Aditya"));
console.log(loginUserMessage());