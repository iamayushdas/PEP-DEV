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

input = process.argv.slice(2);

let types = {
    media: ["mp4", "mkv", "mp3"],
    images: ["jpg", "jpeg", "png", "heic"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: ["docx","doc","pdf","xlsx","xls","odt","ods","odp","odg","odf","txt","ps","tex",],
    app: ["exe", "dmg", "pkg", "deb"],
};

let command = input[0];
let folderPath = input[1];

switch(command){

    case 'tree' :
        console.log('Tree Implimented on');
        break;
    case 'organize' :
        organize(folderPath);
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

function organize(folderPath){
    let destPath;
    if(folderPath == undefined){
        console.log("Enter valid directory path!");
        return;
    }else{
        let doesExist = fs.existsSync(folderPath);
        if(doesExist){
            destPath = path.join(folderPath , 'organized_files');
            if(!(fs.existsSync(destPath))){
                fs.mkdirSync(destPath);
            }else{
                console.log('Folder already exist');
            }
        }else{
            console.log('Please enter a valid path!');
        }
    }
    organizeHelper(folderPath, destPath);
}

function organizeHelper(src, dest){
    let childNames = fs.readdirSync(src);
    for(let i = 0; i<childNames.length; i++){
        let childAddress = path.join(src, childNames[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        // console.log(childAddress, isFile);

        if(isFile){
            let fileCategory = getCategory(childNames[i]);
            console.log(childNames[i], "belongs to", fileCategory)

            sendFiles(childAddress, dest, fileCategory);
        }
    }
}

function getCategory(name){
    let ext = path.extname(name);
    ext = ext.slice(1);
    // console.log(ext)

    for(let type in types){
        let cTypeArr = types[type];
        // console.log(cTypeArr);

        for(let i = 0 ; i<cTypeArr.length; i++){
            if(ext == cTypeArr[i]){
                return type;
            }
        }
    }

    return 'others';
}

function sendFiles(srcFilePath, dest, fileCategory){
    let catPath = path.join(dest, fileCategory)
    if(!(fs.existsSync(catPath))){
        fs.mkdirSync(catPath);
    }

    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(catPath, fileName);

    fs.copyFileSync(srcFilePath, destFilePath);
    fs.unlinkSync(srcFilePath);

    console.log(fileName , 'is copied to', fileCategory);
}