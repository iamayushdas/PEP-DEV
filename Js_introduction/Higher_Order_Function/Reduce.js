let arr = [2,3,4,5,6]

let sum = arr.reduce(function(accumulator, values){
    return accumulator + values
},0)

console.log(sum);