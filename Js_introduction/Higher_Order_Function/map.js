// A higher order function is a function that
//  takes a function as an argument, or returns a function


let arr = [2, 5,9,8,15,11,6];

// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i]*arr[i]);
// }


                            // Map function

// Map is itself a function 
// Map takes a callBack function as an argument
// Map will call the function as many times as the elements in the array
// Map will process every value and will apply the instruction that is inside the callback
// Map return a new Array

let sqarr = arr.map(function squarer(v){
    return v*v
})

console.log(sqarr);


//Q -  Print names using map function
let nameArr = ['Ayush', 'Shivani', 'Vicky']

let printArr = nameArr.map(function printNames(name){
    return name
})

console.log(printArr);


// Q2

let nameArr1 = ['Ayush Das', 'Shivani chauhan', 'Vicky sharma']

let print = nameArr1.map(function printNames(name){
    let partsOfName = name.split(' ')
    return partsOfName;
})

console.log(print);

// Q3

const transaction = [1000, 3000, 4000, 2000,-898, 3800, -4500];
const inrToUsd = 74;

let convertedMoney = transaction.map(function(n){
    return (n/inrToUsd).toFixed(2);
})

console.log(convertedMoney);