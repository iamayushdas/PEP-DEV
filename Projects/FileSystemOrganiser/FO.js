// We will be creating a File System Organizer//
//Features of the Project -
//If you have numerous Files in a folder and they are not Properly arranged
//So you can use this tool to arrange them in specific directory according to their extension
// like text files will go into text File Folder .exe files will go into application folder and so on
// so at the end you will have a arranged set of files in specific folders

//js mein input Array ke from mein jaata hai and that is array is process.argv Array

// let input = process.argv[2];
// console.log(input);

input = process.argv.slice(2);

let command = input[0];
let folderPath = input[1];

switch(command){

    case 'tree' :
        console.log('Tree Implimented on');
        break;
    case 'organize' :
        console.log('Files Organized');
        break;
    case 'help' :
        console.log('Get Help!');
        help();
        break;
    default:
        console.log('Enter valid command');
        break;
}

function help(){
    console.log(`List of commands-
                 1) Tree Command - node FO.js Tree <dirname>
                 2) Organise Command - node FO.js organise <dirname>
                 3) Help Command - node FO.js help`)
}