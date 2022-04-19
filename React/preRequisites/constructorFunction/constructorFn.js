 //constructor function
 
 function car(Name, Model, Color){
     this.name = Name;
     this.model = Model;
     this.color = Color;
    
     this.test = function(){
         console.log(`I am driving ${this.name} ${this.model}`);
     }
 }


 let car1 = new car('BMW', 'X6', 'WHITE');

 let car2 = new car('Mercedes', 's class', 'red');


car1.test();

console.log(car1);
console.log(car2);