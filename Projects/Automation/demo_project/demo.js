let puppeteer = require('puppeteer')

console.log('before');

let browserWillBeLaunchedPromise = puppeteer.launch({
    headless : false,
    defaultViewport: null   //maximize viewport
})

//================== to run default browser interface of chromium
// browserWillBeLaunchedPromise.then(function(broswerInstance){
//     return broswerInstance
// })

//======================== to run a new tab
browserWillBeLaunchedPromise.then(function(broswerInstance){
    let newTabPromise = broswerInstance.newPage();
    return newTabPromise;
}).then(function(newTab){
    console.log('New Tab open');
    let pageWillBeOpenedPromise = newTab.goto('https://pepcoding.com')
    return pageWillBeOpenedPromise;
}).then(function(){
    console.log('Website Openend');
})

console.log('After');