// We will be creating a File System Organizer//
//Features of the Project -
//If you have numerous Files in a folder and they are not Properly arranged
//So you can use this tool to arrange them in specific directory according to their extension
// like text files will go into text File Folder .exe files will go into application folder and so on
// so at the end you will have a arranged set of files in specific folders

//js mein input Array ke from mein jaata hai and that is array is process.argv Array

const fs = require('fs');
const path = require('path');

// let input = process.argv[2];
// console.log(input);

// importing commands
const help = require('./commands/help')
const organize = require('./commands/organize')
const tree = require('./commands/tree')

input = process.argv.slice(2);

let command = input[0];

switch(command){

    case 'tree' :
        // console.log('Tree Implimented on');
        tree.treekey(input[1]);
        break;
    case 'organize' :
        organize.organizekey(input[1]);
        console.log('Files Organized');
        break;
    case 'help' :
        console.log('Get Help!');
        help.helpkey();
        break;
    default:
        console.log('Enter valid command');
        break;
}