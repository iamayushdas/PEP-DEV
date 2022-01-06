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