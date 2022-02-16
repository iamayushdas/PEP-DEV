"use strict"

// console.log(this); // window object

// function f(){
//     console.log(this);
// }

// f()

// let obj = {
//     name : "Ayush",
//     f : function(){
//         console.log(this);
//     }
// }

// obj.f()


let obj2 = {
    name : "Ayush",
    f : function(){
        function g() {
            console.log(this);
        }
        g();
    }
}

obj2.f();