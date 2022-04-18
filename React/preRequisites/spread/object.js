// let obj = {
//     name: 'Ayush',
//     address : {
//         country : 'usa',
//         state :{
//             stateName : 'New York',
//             pinCode : 110080
//         }
//     }
// }

// let obj2 = {...obj}

// obj.name = 'Mark'

// console.log(obj);
// console.log(obj2);

// to appply spread property on nested objects inside object
//  we have to add spread operator to each nested object

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

//       Shallow copy
// let obj2 = {...obj, address:{...obj.address}} 


//       deep copy
let obj2 = JSON.parse(JSON.stringify(obj))

obj.address.state.pinCode = 3242342

obj.address.state.stateName = 'delhi'

obj.name = 'Mark'

obj.address.country = "India"

console.log(obj);
console.log(obj2);