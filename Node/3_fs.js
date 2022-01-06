const fs = require('fs');

// read write update delete file

                                        // ***** Read File *****
let content1 = fs.readFileSync('f1.txt');
console.log("Content from f1 file-> "+content1);

                                        // ***** Write File *****
fs.writeFileSync('f2.txt', 'How are doing!');

// if the file name passed does not exist then a new file will be created with its name and data will be written on that file.
fs.writeFileSync('f3.txt', 'Hope you are doing well!');

                                        // ***** Update File *****

// appends data to the file.
fs.appendFileSync('f1.txt', ' how are you doing today?');

// replace existing data of file.
fs.writeFileSync('f1.txt', 'cheers!');

                                        // ***** Delete File *****

// unlink sync
fs.unlinkSync('f3.txt');
console.log('f3.text deleted');

                                        // ***** Rename File *****

fs.renameSync('f2.txt', 'secondFile.txt');
console.log('file renamed');

                                        // Directories/folders

// mkdirSync used to create new directory or folder
// fs.mkdirSync('mkdirSync folder');
// console.log("folder/directory created");

// delete directory - rmdirSync
// fs.rmdirSync('mkdirSync folder');
// console.log("folder/directory deleted");

// if my folder/file exists or not? existsSync //returns true or false
let doesExist = fs.existsSync('mkdirSync folder');
console.log(doesExist);

// stats of a directory
let statsOfDirectory = fs.lstatSync('mkdirSync folder');
console.log(statsOfDirectory);

// is a file or folder
console.log('isFile?', statsOfDirectory.isFile());
console.log('isDirectory?', statsOfDirectory.isDirectory());

// watch the content in folder -> readdirSync
let folderPath = '/Users/iamayushdas/development/PEP-DEV/Node/mkdirSync\ folder';
let folderContent = fs.readdirSync(folderPath);
console.log("directory content " +folderContent);
