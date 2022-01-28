const request = require('request');
const cheerio = require('cheerio');

console.log('before')



request('https://www.worldometers.info/coronavirus/country/india/', cb)


function cb(error, response, html){
    if(error){
        console.log(error)
    }else{
        handleHtml(html)
    }
}


function handleHtml(html){
    let selTool = cheerio.load(html)

    let contentArr = selTool('.maincounter-number span');

    // for(let i = 0; i<contentArr.length; i++){
    //     let data = selTool(contentArr[i]).text()
    //     console.log(data)
    // }

    let totalcases = selTool(contentArr[0]).text();
    console.log('Total cases: ', totalcases)


    let deaths = selTool(contentArr[1]).text();
    console.log('Deaths: ', deaths)


    let recovered = selTool(contentArr[2]).text();
    console.log('Recovered: ', recovered)
    // console.log(contentArr)
}




console.log('after')