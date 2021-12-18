// array provides you an ordered collection of elements

let arr = []; //array declared

let cars = ['ferrari', 'tesla', 'bmw'.toUpperCase() , 'audi', 2 , true, null]; //array initialised
console.log(cars);

cars[0] = 'mercedes';
console.log(cars);

// adding element beyond array size
// <empty items> get print
cars[8] = 'bentley';
console.log(cars);

let cars2 = ['ferrari', 'tesla', 'bmw'];

// array size/length
console.log(cars2.length);

for(var i = 0; i<cars2.length ; i++){
    console.log(cars2[i]);
}

// BMW popped - removing element from last
console.log(cars2.pop());
console.log(cars2)

// adding element at last
console.log(cars2.push('rolls royce'));
console.log(cars2)

// shift method - removes the element from starting
console.log(cars2.shift());
console.log(cars2);

// unshift method - adds the element to starting
console.log(cars2.unshift('ashton martin'));
console.log(cars2);

// multidimension arrays

let matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(matrix);
// particular element of matrix
console.log(matrix[2][1]);   //8
console.log(matrix[0][0]);   //1
console.log(matrix[1]);      //[4,5,6]