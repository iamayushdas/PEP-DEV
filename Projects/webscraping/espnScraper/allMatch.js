const request = require('request')
const cheerio = require('cheerio')
const scorecardObj = require('./scoreCard')
function getAllMatchesLink(uri){
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
        let fullLink = 'https://www.espncricinfo.com' + link
        console.log(fullLink);
        

        scorecardObj.ps(fullLink)
    }
}

module.exports = {
    getAllMatch: getAllMatchesLink
}