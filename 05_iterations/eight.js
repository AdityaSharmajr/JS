// reduce
const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (accumulator, currentvalue) {
    
 

// in arrow fuction

const myTotal = myNums.reduce( (accumulator,currentvalue)=> (accumulator+currentvalue),0)
console.log(myTotal);