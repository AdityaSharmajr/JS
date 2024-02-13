for(let i = 1; i< 10; i++){
    // console.log(i);
}
// console.log(i);


for(let i = 1; i <= 10; i++){
    // console.log(`Outer loop value: ${i}`);
    for(let j = 1; j <= 10; j++){
        // console.log(`Inner loop Value ${j} and inner loop ${i}`);
    }
}

// Break

for(let i = 1; i< 10; i++){
    if(i == 5){
    // console.log(`detected 5`);
    break
    }
    // console.log(`Value of i is ${i}`);
}

// Continue

for(let i = 1; i< 10; i++){
    if(i == 5){
    // console.log(`detected 5`);
    continue
    }
    console.log(`Value of i is ${i}`);
}





























