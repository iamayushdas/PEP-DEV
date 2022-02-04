let arr = [2, 3,5,7,9,11,13,12,18]

let evenNoArr = arr.filter(function(n){
    if(n%2==0) return true
})

console.log(evenNoArr);


// Q2 - filter out profits

const transaction = [1000, 3000, 4000, 2000, -898, 3800,-4500]

let profit = transaction.filter(function(n){
    // if(n>0) return true

    return n>0
})

console.log(profit);