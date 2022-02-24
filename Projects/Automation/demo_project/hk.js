// https://hackerrank.com/auth/login
const puppeteer = require('puppeteer')

let email = "ripijo1424@ishop2k.com"
let password = "fakepassword"

let page

let browserWillBeLaunchedPromise = puppeteer.launch({
    headless: false,
    defaultViewport: null
})

browserWillBeLaunchedPromise.then(function (browserInstance) {
    let newTabPromise = browserInstance.newPage();
    return newTabPromise
}).then(function (newTab) {
    page = newTab
    let pageWillBeOpenedPromise = newTab.goto('https://hackerrank.com/auth/login')
    return pageWillBeOpenedPromise
}).then(function (webPage) {
    console.log('Page openened');
    let typeEmailPromise = page.type("#input-1", email, { delay: 50 })
    return typeEmailPromise

}).then(function () {
    let typePasswordPromise = page.type("#input-2", password, { delay: 50 })
    return typePasswordPromise
}).then(function () {
    let loginPromise = page.click('button[data-analytics="LoginPassword"]', { delay: 50 })
    return loginPromise;
}).then(function () {

    let algoWillBeClickedPromise = waitAndClick('.topic-card a[data-attr1="algorithms"]', page)
    return algoWillBeClickedPromise
}).then(function () {
    console.log('algo clicked');
})

function waitAndClick(selector, cPage) {
    return new Promise(function (resolve, reject) {
        let waitForModalPromise = cPage.waitForSelector(selector);
        waitForModalPromise.then(function () {
            let clickModalPromise = cPage.click(selector, { delay: 50 })
            return clickModalPromise
        }).then(function () {
            resolve()
        }).catch(function () {
            reject()
        })
    })
}