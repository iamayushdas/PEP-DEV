function placeOrder(drink){
    return new Promise(function(resolve, reject){
        if(drink == 'coffee'){
            resolve('order for coffee ')
        }else{
            reject('order cannot be placed')
        }
    })
}

function processOrder(order){
    return new Promise(function(resolve){
        console.log('order is being processed');
        resolve(`${order} served`)
    })
}

placeOrder('coffee').then(function(demand){
    console.log(demand);
    let orderIsProcessed = processOrder(demand)
    return orderIsProcessed
})
.then(function(orderServed){
    console.log(orderServed);
})
.catch(function(err){
    console.log(err);
})