const fs = require('fs');

let f1 = fs.promises.readFile('f1.txt')

let f2 = fs.promises.readFile('f2.txt')

let f3 = fs.promises.readFile('f3.txt')

console.log(f1);