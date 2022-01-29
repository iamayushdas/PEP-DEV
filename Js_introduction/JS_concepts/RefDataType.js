// //       Non primitive data type

// let arr = [1, 'a']
// console.log(arr, typeof(f))

// let func = function(){
//     console.log('hello func');
// }

// console.log(func, typeof(g));

// let obj = {
//     name : 'Ayush',
//     age : 22
// }

// console.log(obj, typeof(obj));



let firstPerson = {
    name : 'Ayush',
    age : 22
}

let secondPerson = firstPerson

firstPerson.name = 'Shivani'

console.log(firstPerson);  //Shivani
console.log(secondPerson); //Shivani 