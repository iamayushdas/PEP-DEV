// CONTEXT : Node + non-strict

// global area -> empty object
// function -> global object
// object - function -> object itself
// object - function - function -> global object


//console.log(this);  //global area  //empty object



// inside a function
// function f(){
//     console.log(this);
// }

// f()


// inside a function inside an object

// let obj = {
//     name: "Ayush",
//     f: function () {
//         console.log(this);
//     }
// }

//obj.f(); // return object itself


// inside a function of a function inside an object
let obj2 = {
    name: "Ayush",
    f: function f() {
        function g() {
            console.log(this);
        }
        g();
    }
}

obj2.f();  //return global object