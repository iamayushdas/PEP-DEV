// let obj = {
//     name: 'Ayush',
//     stateName : 'New York',
//     pinCode : 110080
// }


// let {name, stateName, pinCode} = obj

// console.log(name, stateName, pinCode);


// nested object
let obj = {
    name: 'Ayush',
    address : {
        country : 'usa',
        state :{
            stateName : 'New York',
            pinCode : 110080
        }
    }
}

let {name : n} = obj

// let {address : {country}} = obj

let {address : {country:c}} = obj

let {address : {state : {pinCode:p}}} = obj

// console.log(name, country);

console.log(n, c, p);