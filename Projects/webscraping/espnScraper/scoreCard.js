// const url = 'https://www.espncricinfo.com//series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard'

const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')
const path = require('path')
const xlsx = require('xlsx')
function processScorecard(url){
    request(url, cb)
}

function cb(err, response, html){
    if(err) console.error(err);
    else extractMatchDetails(html);
}

function extractMatchDetails(html){
    let $ = cheerio.load(html)
    let descString = $('.header-info .description')
    let result = $('.match-info.match-info-MATCH.match-info-MATCH-half-width .status-text span').text()
    // console.log(descString.text())
    let descStringArr = descString.text().split(',')

    let venue = descStringArr[1].trim()
    let date = descStringArr[2].trim()

    let innings = $('.card.content-block.match-scorecard-table .Collapsible')
    // let inningsHtmlString = ""
    for(let i = 0; i<innings.length; i++){
        // inningsHtmlString = $(innings[i]).html();
        let teamName = $(innings[i]).find("h5").text();
        teamName = teamName.split("INNINGS")[0].trim();
        let opponentIndex = (i==0)?1:0
        let opponentName = $(innings[opponentIndex]).find("h5").text()
        opponentName = opponentName.split("INNINGS")[0].trim()
        console.log(`${venue} | ${date} | ${teamName} | ${opponentName} | ${result}`);


        let currInning = $(innings[i])
        let allRows = currInning.find(".table.batsman tbody tr");
        for(let j = 0; j<allRows.length; j++){
            let allCols = $(allRows[j]).find("td")
            let isWorthy = $(allCols[0]).hasClass("batsman-cell")
            if(isWorthy == true){
                
                let playerName = $(allCols[0]).text().trim();
                let runs = $(allCols[2]).text().trim();
                let balls = $(allCols[3]).text().trim();
                let fours = $(allCols[5]).text().trim();
                let sixes = $(allCols[6]).text().trim();
                let sr = $(allCols[7]).text().trim();
                console.log(`${playerName} ${runs} ${balls} ${fours} ${sixes} ${sr}`);
                processPlayer(teamName, playerName, runs, balls , fours, sixes, sr, opponentName, venue, date, result)
            }
        }
    }
    console.log("==============================================");
}

function processPlayer(teamName, playerName, runs, balls , fours, sixes, sr, opponentName, venue, date, result){
    let teamPath = path.join(__dirname, "ipl", teamName);
    dirCreater(teamPath);
    let filepath = path.join(teamPath, playerName + ".xlsx");
    let content = excelReader(filepath, playerName);
    let playerObj = {
        teamName,
        playerName,
        runs, 
        balls, 
        fours,
        sixes,
        sr,
        opponentName,
        venue, 
        date,
        result
    }
    content.push(playerObj);
    excelWriter(filepath, content, playerName)
}

function dirCreater(filepath){
    if(fs.existsSync(filepath) == false){
        fs.mkdirSync(filepath)
    }
}

function excelWriter(filepath, json, sheetName) {
    let newWB = xlsx.utils.book_new();
    let newWS = xlsx.utils.json_to_sheet(json);
    xlsx.utils.book_append_sheet(newWB, newWS, sheetName);
    xlsx.writeFile(newWB, filepath)
}


function excelReader(filepath, sheetName) {
    if(fs.existsSync(filepath)==false){
        return [];
    }
    let wb = xlsx.readFile(filepath);
    let excelData = wb.Sheets[sheetName];
    let ans = xlsx.utils.sheet_to_json(excelData);
    return ans;
}


module.exports = {
    ps : processScorecard
}