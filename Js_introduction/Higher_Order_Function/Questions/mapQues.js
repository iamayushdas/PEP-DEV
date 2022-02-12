// find no of products whose price greater than 100
const products = [
    { name: "T-Shirt", price: 25 },
    { name: "Headphones", price: 125 }, 
    { name: "Keyboard", price: 75 }, 
    { name: "Monitor", price: 200 },
]; 

let prodAbove100 = products.filter(function(product){
    return product.price >=100;
}).map(function(a){
    return a.name;
})

console.log(prodAbove100.length);