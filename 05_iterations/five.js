const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function (val){
    // console.log(val);
})

coding.forEach( (item) => {
    // console.log(item);
})

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: " javascript",
        languageFileName: "js"
    },
    {
        languageName: " Python",
        languageFileName: "py"
    },
    {
        languageName: " c++",
        languageFileName: "cpp"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})