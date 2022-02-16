

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


let obj = {
    name : "Ayush",
    f : function(){
        function g() {
            console.log(this);
        }
        g();
    }
}

obj.f();