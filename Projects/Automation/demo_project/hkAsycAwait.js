// https://hackerrank.com/auth/login
const puppeteer = require('puppeteer')

let email = "ripijo1424@ishop2k.com"
let password = "fakepassword"
const codeFile = require('./code')
let page;


(async function () {
    try {
        let browserWillBeLaunched = await puppeteer.launch({
            headless: false,
            defaultViewport: null
        })

        let newTab = await browserWillBeLaunched.newPage();

        await newTab.goto('https://hackerrank.com/auth/login')

        await newTab.type("#input-1", email, { delay: 50 })

        await newTab.type("#input-2", password, { delay: 50 })

        await newTab.click('button[data-analytics="LoginPassword"]', { delay: 50 })

        await waitAndClick('.topic-card a[data-attr1="algorithms"]', newTab)

        await waitAndClick('input[value="warmup"]', newTab)

        let challengesArr = await newTab.$$('.challenge-submit-btn')
        console.log("No of question" + challengesArr.length);

        await questionSolver(newTab, challengesArr[0], codeFile.answers[0])
    } catch (error) {
        console.log(error);
        reject();
    }
})();

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