// var c = 300
// let a = 300
// if (true) {
//     let a = 10
//     const b = 20
//     // var c = 30
//     console.log("INNER: ", a);

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }    

// }
// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const username = "aditya"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    
    two()
}

// one()

if(true){
    const username = "aditya"
    if(username === "aditya") {
        const website = " Youtube"
        // console.log((username + website));
    }
    // console.log(website);
}
// console.log(username);


// ++++++++++++++++ interesting +++++++++++++++++


console.log(addone(5));
function addone(num){
    return num + 1
} 


addtwo(5)
const addtwo = function(num){
    return num + 2
} 
