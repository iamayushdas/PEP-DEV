// variable Declaration

// var, let, const

// JS is dyanamically typed language

// Problems with var keyword

var a = 1;
console.log(a);

var a = 'A string';
console.log(a);

var a = true;
console.log(a);

// Datatypes in JS
//     number
//     String
//     Boolean
//     undefined
//     null

let b = 1;
// let a = 2;   //error using the same variable twice
b = 2;           // reassigning is possible
console.log(b);

const c = 'Ayush';
// const c = 'Shivani'; //error using the same variable twice
// c = 'Shivani';       // reassigning not possible
console.log(c);



// 2nd problem with var -- Scoping

if(10%2==0){
    // var d = 2;   // Can be accessed out of if block which should be not allowed
    let d = 2;      // resolves the above problem
    console.log(d);
}

console.log(d);


