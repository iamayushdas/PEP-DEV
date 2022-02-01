let arr = [
    {name: "A", age: 14, gender: "M"},
    {name: "B", age: 34, gender: "M"},
    {name: "C", age: 24, gender: "F"},
    {name: "D", age: 44, gender: "F"},
    {name: "E", age: 44, gender: "M"},
    {name: "F", age: 28, gender: "F"},
    {name: "G", age: 26, gender: "M"},
    {name: "H", age: 47, gender: "F"},
]

// Age of all the ladies

let ageOfLadies = arr.filter(function(n){
    return n.gender=="F"
}).map(function(a){
    return a.age
})

console.log(ageOfLadies);