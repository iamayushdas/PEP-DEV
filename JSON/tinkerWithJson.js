let fs = require("fs");
// let buffer = fs.readFileSync("./example.json")
// console.log(buffer);
// console.log("----------------------");

                // converts buffer into array
// let data = JSON.parse(buffer);

let data = require("./example.json")

// console.log(data);
data.push(
    {
        "name": "Anuj",
        "last name": "Singh",
        "isCoder": true,
        "friend": [
            "Amit",
            "Akshay"
        ],
        "age": 22,
        "address": {
            "city": "new delhi",
            "state": "delhi",
            "country": "india"
        }
    }
)
// console.log(data);

let stringData = JSON.stringify(data)
fs.writeFileSync("example.json", stringData);



