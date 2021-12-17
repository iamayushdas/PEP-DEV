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
