// String is a sequence of characters

let str = 'pepcoders';
console.log(str);

// Methods -

// Length of string
console.log(str.length);    //--> 9

// extracting a part of a string

// 1. Slice   --> slice(startidx, endidx + 1);

let slicedstr = str.slice(3, 8);
console.log(slicedstr);   //--> coder

// 2. substr --> substr(start, length)

let subString = str.substr(3, 5)
console.log(subString);    //--> coder

// Replacing string content

let sayHello = 'Hello Shivani';
console.log(sayHello);

// Replace method --> replace(valToBeReplace, replaceWith)
let sayBye = sayHello.replace('Hello', 'Bye');
console.log(sayBye);

// ToUpperCase and ToLowerCase

let text1 = 'hello world';
let text2 = text1.toUpperCase();
let text3 = text1.toLowerCase();
console.log(text1);   //--> hello world
console.log(text2);   //--> HELLO WORLD
console.log(text3);   //--> hello world

// Concat method ---> concatenate texts
// concat("", secondString)
let part1 = 'Hello';
let part2 = 'Shivani';
console.log(part1.concat(" bhai ",part2));

// Trim method ---> removes white spaces
let text = '            hello       ';
console.log(text.trim());
console.log(text.trimRight());
console.log(text.trimLeft());

