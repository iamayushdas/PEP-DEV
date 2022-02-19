const fs = require('fs');
console.log("before");

let f1 = fs.promises.readFile('f1.txt')

let f2 = fs.promises.readFile('f2.txt')

let f3 = fs.promises.readFile('f3.txt')

f1.then(cb);
f2.then(cb);
f3.then(cb);

function cb(data){
    console.log(""+data);
}

console.log("after");
console.log("other");