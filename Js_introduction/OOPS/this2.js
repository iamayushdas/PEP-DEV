// Node + strict

"use strict"


// global -> empty object
console.log(this);

function f(){
    console.log(this);
}

f();

let obj = {
    name : 'Ayush',
    f : function(){
        console.log(this);
    }
}

obj.f();

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