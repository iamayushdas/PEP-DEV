const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";
const fs = require('fs')
const path = require('path')
const request = require('request')
const cheerio = require('cheerio')

const AllMatchObj = require("./allMatch")
// homepage

const iplPath = path.join(__dirname, "ipl")
dirCreater(iplPath);
request(url, cb)


function cb(err, response, html){
    if(err) console.error(err);
    else extractLink(html);
}

function extractLink(html){
    let $ = cheerio.load(html)
    let anchorElement = $('a[data-hover="View All Results"]')
    // let link = anchorElement.attr('href');
    
    let fulllink = 'https://www.espncricinfo.com' + $(anchorElement).attr('href');
    // console.log(fulllink);

    AllMatchObj.getAllMatch(fulllink);
}

function getAllMatchLink(uri){
    request(uri, function(error, response, html){
        if(error) console.error(error);
        else extractAllLink(html)
    })
}

function extractAllLink(html){
    let $ = cheerio.load(html)
    let scoreCardArr = $('a[data-hover="Scorecard"]')
    for(let i = 0; i<scoreCardArr.length; i++){
        let link = $(scoreCardArr[i]).attr('href')
        let fulllink = 'https://www.espncricinfo.com' + link
        console.log(fulllink);
    }
}


function dirCreater(filepath){
    if(fs.existsSync(filepath) == false){
        fs.mkdirSync(filepath)
    }
}