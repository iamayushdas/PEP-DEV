let arr = [2,3,4,5,6]

let sum = arr.reduceRight(function(accumulator, values){
    return accumulator + values
},0)

console.log(sum);