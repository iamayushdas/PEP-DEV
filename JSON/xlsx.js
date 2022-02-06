let fs = require("fs");
let xlsx = require('xlsx')


// let data = require("./example.json")

// //                             EXCEL
// // Wb -> filepath, ws -> name, json data

function excelWriter(filepath, json, sheetName) {
    let newWB = xlsx.utils.book_new();
    let newWS = xlsx.utils.json_to_sheet(json);
    xlsx.utils.book_append_sheet(newWB, newWS, sheetName);
    xlsx.writeFile(newWB, filepath)
}
// // new workbook
// let newWB = xlsx.utils.book_new();

// // json data -> excel format convert
// let newWS = xlsx.utils.json_to_sheet(data);

// // newWB, ws, sheet name
// xlsx.utils.book_append_sheet(newWB, newWS, "sheet-1");

// // filepath
// xlsx.writeFile(newWB, "abc.xlsx")

function excelReader(filepath, sheetName) {
    if(fs.existsSync(filepath)==false){
        return [];
    }
    let wb = xlsx.readFile(filepath);
    let excelData = wb.Sheets[sheetName];
    let ans = xlsx.utils.sheet_to_json(excelData);
    return ans;
}

// // Read xlsx
// let wb = xlsx.readFile("abc.xlsx");

// // select sheet
// let excelData = wb.Sheets["sheet-1"];

// // sheet to json
// let ans = xlsx.utils.sheet_to_json(excelData);
// console.log(ans);