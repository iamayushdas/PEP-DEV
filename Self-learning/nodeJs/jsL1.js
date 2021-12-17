var name = 'Ayush Das';
var age = 22;
var engineer = true;

function about(name, age, engineer){
    return 'My name is ' + name + ' and i am ' + age + ' year old and i am an engineer: ' + engineer; 
}

console.log(about(name, age, engineer));
console.log(about('Shivani', 23, true));