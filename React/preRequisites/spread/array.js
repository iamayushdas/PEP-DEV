let arr1 = [1,2,3,4]

// spread operator use krke hmne reference hata diya or memory location change kr dia
let arr2 = [...arr1]

arr1.push(5)

console.log(arr1);
console.log(arr2);