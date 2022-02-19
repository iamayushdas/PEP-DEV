const fs = require('fs');

console.log("before");

let f1 = fs.promises.readFile('f1.txt')

// f1.then(cb)
f1.then(cb).then(cb2).then(cb3).catch(function(err){
    console.log(err);
})

function cb(data){
    console.log("" + data);
    let f2 = fs.promises.readFile('f2.txt')
    
    return f2
}

function cb2(data){
    console.log("" + data);
    let f3 = fs.promises.readFile('f3.txt')
    
    return f3
}

function cb3(data){
    console.log("" + data);
}

console.log("after")



// improvement

