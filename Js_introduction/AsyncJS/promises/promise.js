const fs = require('fs');

console.log("before");

// fs.readFile('f1.txt', function(err, data){
//     if(err){
//         console.log(err);
//     }
//     console.log('File Data->' , "" + data);
// });

let promise = fs.promises.readFile("f1.txt")
// console.log(promise); // pending

// fullfill
// promise.then(function(data){
//     console.log(""+data);
// })


// Rejected
// promise.catch(function(err){
//     console.log(err);
// })


console.log("after");