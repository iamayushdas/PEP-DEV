// https://hackerrank.com/auth/login
const puppeteer = require('puppeteer')

let email = "ripijo1424@ishop2k.com"
let password = "fakepassword"
const codeFile = require('./code')
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
}).then(function(){
    console.log('algoritm section clicked');
})
.then(function(){
    let warmUpSectionClickedPromise = waitAndClick('input[value="warmup"]', page)
    return warmUpSectionClickedPromise
}).then(function(){
    console.log('warmUp Section Clicked');
})
.then(function(){
    let challengesArrPromise = page.$$('.challenge-submit-btn')
    return challengesArrPromise
}).then(function(questionsArr){
    console.log("No of question" + questionsArr.length);

    let questionWillBeSolvedPromise = questionSolver(page, questionsArr[0], codeFile.answers[0])
    return questionWillBeSolvedPromise
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

function questionSolver(page, question, answer){
    return new Promise(function(resolve, reject){
        let questionWillBeClickedPromise = question.click()
        questionWillBeClickedPromise.then(function(){
            console.log('question clicked');
            let editorInFocusPromise = waitAndClick('.monaco-editor.no-user-select.vs', page)
            return editorInFocusPromise
        })
        .then(function(){
            return waitAndClick('.checkbox-input', page)
        })
        .then(function(){
            return page.waitForSelector('textarea.custominput', page)
        })
        .then(function(){
            return page.type('textarea.custominput', answer, {delay: 10})
        })
        .then(function() {
            let ctrlIsPressedPromise = page.keyboard.down('Control');
            return ctrlIsPressedPromise;
        })
        .then(function() {
            let AIsPressedPromise = page.keyboard.press('A', {delay: 10});
            return AIsPressedPromise;
        })
        .then(function() {
            let XIsPressedPromise = page.keyboard.press('X', {delay: 10});
            return XIsPressedPromise;
        })
        .then(function() {
            let ctrlIsReleasedPromise = page.keyboard.up('Control');
            return ctrlIsReleasedPromise;
        })
        .then(function(){
            let editorInFocusPromise = waitAndClick('.monaco-editor.no-user-select.vs', page)
            return editorInFocusPromise
        })
        .then(function() {
            let ctrlIsPressedPromise = page.keyboard.down('Control');
            return ctrlIsPressedPromise;
        })
        .then(function() {
            let AIsPressedPromise = page.keyboard.press('A', {delay: 10});
            return AIsPressedPromise;
        })
        .then(function() {
            let VIsPressedPromise = page.keyboard.press('V', {delay: 10});
            return VIsPressedPromise;
        })
        .then(function() {
            let ctrlIsReleasedPromise = page.keyboard.up('Control');
            return ctrlIsReleasedPromise;
        })
        .then(function(){
            return page.click('.hr-monaco__run-code', {delay: 20})
        })
        .then(function(){
            resolve();
        }).catch(function(err){
            reject();
        })
    })
}