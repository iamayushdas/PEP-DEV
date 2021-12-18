// In JS objects are basicaally key-value pair

// to declare an object

let obj = {}   //object declaration
let person = {
    name: 'Ayush',  // here name is 'key' and Ayush is 'value'
    age: 22,
    job: 'Software engineer'
}

console.log(person);

let cap = {
    fname: 'Steve',
    lname: 'rogers',
    friends: ['Bucky', 'Tony Stark', 'Dr Banner'],
    age: 102,
    isAvenger: true,
    address: {
        state: 'manhattan',
        city: 'new york',
        pincode: 110090
    },
    saysHi: function funcName(){
        console.log('captain america says hi');
    }
}

console.log(cap);                   // prints whole object
console.log(cap.fname);             // Steve
console.log(cap.lname);             // rogers
console.log(cap.address.state);     // manhattan
console.log(cap.friends[0]);        // Bucky

// bracket notation
console.log(cap['fname']);          // Steve

cap.saysHi();                       // captain america says hi


// loop -> for in  loop

for(let key in cap){
    console.log("key : ", key, "value : " , cap[key]);
}

// manipulate object data
cap.isAvenger = false;
console.log(cap);

// adding more key value pairs or adding new property to object
cap.movies = ['Age of ultron', 'civil war'];
console.log(cap);

// deleting property from object
delete cap.movies;
console.log(cap);