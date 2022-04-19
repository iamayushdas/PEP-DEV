// class & inheritance & super

class Person {
    constructor(name, age){
        this.Name = name;
        this.Age = age;
    }

    welcome(){
        console.log("hello " + this.Name);
    }
}

class Student extends Person{
    constructor(name, age, cgpa){
        // this.Name = name;
        // this.Age = age;
        super(name, age);
        this.Cgpa = cgpa;
    }

    hello(){
        super.welcome();
    }
}

class Teacher extends Person{
    constructor(name, age, dept){
        // this.Name = name;
        // this.Age = age;
        super(name, age);
        this.dept = dept;
    }
}


// let person1 = new Person('Shivani', 23)
// let person2 = new Person('Ayush', 22)

let student1 = new Student('Ayush', 22, 7.8)
let teacher1 = new Teacher('Shivani', 23, 'IT')

console.log(student1);
console.log(teacher1);
student1.hello();