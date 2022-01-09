const path = require('path');

let ext = path.extname('/Users/iamayushdas/development/PEP-DEV/Node/dir1/f1.txt');
console.log(ext);

let basename = path.basename('/Users/iamayushdas/development/PEP-DEV/Node/dir1/f1.txt');
console.log("Basename" + basename);

// current directory path
console.log(__dirname);

// current file path
console.log(__filename);