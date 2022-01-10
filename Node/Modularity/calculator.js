function add(a, b){
    console.log("the sum is " , (a+b));
}

function subtract(a, b){
    console.log("the difference is " , (a>b)?a-b:b-a);
}

function Multiply(a, b){
    console.log("the product is " , (a*b));
}

function Division(a, b){
    console.log("the quotient is " , (a/b));
}

// module.exports is an object provide by the node.js through which we can export our function
// in key value pair , we will use your function with the keys we have assigned to them

module.exports = {
    addition : add,
    subtract : subtract,
    Multiplication : Multiply,
    Divide : Division
}