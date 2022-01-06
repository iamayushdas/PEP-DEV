// child process is a node module use to create sub processes within a script
// we can create different task with this script
const cp = require('child_process');
// console.log("trying to open calculator");
// cp.execSync('open https://github.com/iamayushdas');
// console.log("Opening Apple music");
// cp.execSync('open -a Music');

let output = cp.execSync('node test.js');
console.log('Output-> ' + output); //string k saath concat krke buffer ko string format me convert kr dia
