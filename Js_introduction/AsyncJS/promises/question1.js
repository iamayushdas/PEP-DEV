function placeOrder(drink) {
    return new Promise(function (resolve, reject) {
        if (drink == 'coffee') {
            resolve('order for coffee ')
        } else {
            reject('order cannot be placed')
        }
    })
}

function processOrder(order) {
    return new Promise(function (resolve) {
        console.log('order is being processed');
        resolve(`${order} served`)
    })
}

// promisified solution

// placeOrder('coffee').then(function(demand){
//     console.log(demand);
//     let orderIsProcessed = processOrder(demand)
//     return orderIsProcessed
// })
// .then(function(orderServed){
//     console.log(orderServed);
// })
// .catch(function(err){
//     console.log(err);
// })


// Async-await solution

async function serveOrder() {

    try {
        let orderPlaced = await placeOrder('coffee');
        console.log(orderPlaced);  // order for coffee

        let processedOrder = await processOrder(orderPlaced);
        console.log(processedOrder);
    } catch (error) {
        console.log(error);
    }

}

serveOrder()