const fs = require('fs');


// Callback function - any function that is passed as an argument
// to another function is know as a callback function


// function printFirstName(firstName, cb, cb2){
//     console.log(firstName)
//     cb('Das')
//     cb2(22)
// }

// function printLastName(lastName){
//     console.log(lastName)
// }

// function printAge(age){
//     console.log(age);
// }

// printFirstName('Ayush', printLastName, printAge)

// Synchronous way of reading file

// console.log('before');

// let data = fs.readFileSync('f1.txt')

// console.log(' ' + data);

// console.log('after');

// Asynchronous way of reading file

console.log('before');

fs.readFile('f1.txt', cb1)

fs.readFile('f2.txt', cb2)


function cb1(err, data){
    if(err){
        console.log(err);
    }else{
        console.log('' + data);
    }
}

function cb2(err, data){
    if(err){
        console.log(err);
    }else{
        console.log('' + data);
    }
}

console.log('after');