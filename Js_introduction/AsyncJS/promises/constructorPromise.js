// let myPromise = new Promise(function(resolve, reject){
//     // your code will go here

// })


// let promise = new Promise(function(resolve, reject){
//     const a = 'Pepcoders'
//     const b = 'Pepcoders'

//     if(a === b){
//         resolve()
//     }else{
//         reject()
//     }
// })

// promise.then(function(){
//     console.log("Equal");
// })

// promise.catch(function(){
//     console.log("Not Equal");
// })



let promise = new Promise(function(resolve, reject){
    const a = 'Pepcoders'
    const b = 'Pepcoders'

    if(a === b){
        resolve('a and b are equal')
    }else{
        reject('no a and b are not equal')
    }
})

promise.then(function(data){
    console.log(data);
})

promise.catch(function(err){
    console.log(err);
})