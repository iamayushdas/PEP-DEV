// write a fn to add two numbers

// let add = (a,b) => {
//     return a + b;
// }

// console.log(add(3,4));


// let regularFunction = function(name){
//     console.log(`This is a ${name} function`);
// }

// let arrowFunction = (name) => {
//     console.log(`This is an ${name} function`);
// }


// regularFunction('regular');
// arrowFunction('arrow');


let person = {
    name : 'Shivani',
    age : 22,

    showDetails : function(){
        console.log(this.name + ' ' + this.age); // shivani 22
    },

    showDetailsArrow : () => {
        console.log(this.name + ' ' + this.age);  // undefined undefined
    }
}


person.showDetails()
person.showDetailsArrow()