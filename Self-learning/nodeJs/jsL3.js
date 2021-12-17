const name = 'Ayush Das';
let age = 22;
const engineer = true;

// name = 'Shivani';   // we get a error here as we can't change const value

const about = (name, age, engineer) => {
    return 'My name is ' + name + ' and i am ' + age + ' year old and i am an engineer: ' + engineer; 
}

// const sum = (a, b) => {
//     return a + b;
// }

const sum = (a, b) => a+b;

// const sumOne = (a) => a + 1;

const sumOne = a => a + 1;

const sumRandom = () => 1+2;

console.log(about(name, age, engineer));
console.log(about('Shivani', 23, true));

console.log(sum(1 , 2));
console.log(sumOne(1));
console.log(sumRandom());