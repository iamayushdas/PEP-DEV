const fs = require('fs');
const path = require('path');

function organize(dirpath){
    let destPath;
    if(dirpath == undefined){
        console.log("Enter valid directory path!");
        return;
    }else{
        let doesExist = fs.existsSync(dirpath);
        if(doesExist){
            destPath = path.join(dirpath , 'organized_files');
            if(!(fs.existsSync(destPath))){
                fs.mkdirSync(destPath);
            }else{
                console.log('Folder already exist');
            }
        }else{
            console.log('Please enter a valid path!');
        }
    }
    organizeHelper(dirpath, destPath);
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

module.exports={
    organizekey : organize
}