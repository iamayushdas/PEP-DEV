const transaction = [1000, 3000, 4000, 2000, -898, 3800,-4500];

const firstWithdrawl = transaction.find(function(n){
    return n<0
})

console.log(firstWithdrawl);