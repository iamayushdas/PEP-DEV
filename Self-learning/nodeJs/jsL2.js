const name = 'Ayush Das';
let age = 22;
const engineer = true;

// name = 'Shivani';   // we get a error here as we can't change const value

function about(name, age, engineer){
    return 'My name is ' + name + ' and i am ' + age + ' year old and i am an engineer: ' + engineer; 
}

console.log(about(name, age, engineer));
console.log(about('Shivani', 23, true));