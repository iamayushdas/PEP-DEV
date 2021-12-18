// Normal func

function sayHi(){
    console.log('function said hi!');
} // function declaration

sayHi();  // function invokation

// parameters in function

function add(a, b){  // parameters passed a and b
    console.log("The addition is: " , a+b);
}

add(2, 3);  // arguements given 2 and 3

function sub(a, b){
    console.log("subtraction is: " , a-b);
}

sub(2,3);

function mul(a, b){
    return 'multiplication is: ' +a*b;
}

console.log(mul(2,3));

// function as first class citizens
// javascript function or variable me koi difference nahi krta, js me variables ko function
    // banakr call kr skta h


// Anonymous function - no name function
let sayHii = function(){
    console.log('Hii from function as variable');
}

sayHii();

// IIFE (Immediately invoked function expression)

let addition = (function(a, b){
    return 'Addition from IIFE'+ a+b;
})(16,14)

console.log(addition);
